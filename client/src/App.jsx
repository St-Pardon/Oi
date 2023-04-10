import './App.css';
import LandingPage from './routes/landing-page/LandingPage.route';
import Signin from './auth/signin/Signin.auth';
import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Signup from './auth/signup/Signup.auth';
import Chat from './routes/chat/chat.route';
import Messages from './routes/messages/Messages.route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import Protected from './auth/protect/protect.auth';
import NewChat from './component/new-chat/NewChat.component';
import Profile from './routes/profile/Profile.route';
import ChatHome from './component/chat-home/ChatHome.component';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

let socket;
const URI = 'ws://127.0.0.1:5230';

function App() {
  const [user, setUser] = useState('');
  const [chat, setChat] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [to, setTo] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [connect, setConnect] = useState(false);

  const connectChat = (username) => {
    socket.auth = { username };
    socket.connect();
  };

  useEffect(() => {
    // socket = io.connect("http://localhost:5230")
    socket = io(URI, {
      autoConnect: false,
      withCredentials: true,
      extraHeaders: {},
    });
    // socket = io(URI)
    if (connect) connectChat(localStorage.getItem('userId'));
    // }, [URI])
  }, [connect]);

  useEffect(() => {
    socket.on('message', ({ chat, to, from }) => {
      console.log(chat, to, from);
      setMsgs((msgs) => [...msgs, { chat, to, from }]);
    });
    socket.on('disconnect', ()=>{
      console.log('user left')
      socket.emit('backup', msgs)
    })
  }, [connect]);

  const handleSend = () => {
    if (chat) {
      socket.emit(
        'chat',
        { to, from: localStorage.getItem('userId'), chat },
        () => setChat('')
      );
      // setMsgs(msgs => [ ...msgs, chat ]);
      setChat('');
    }
  };

  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    {
      path: '/signin',
      element: (
        <Signin
          setUser={setUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          socket={setConnect}
        />
      ),
    },
    { path: '/signup', element: <Signup /> },
    { path: '/test', element: <Profile /> },
    {
      path: '/chat',
      // element: isAuthenticated ? (
      //   <Chat user={user} isAuthenticated={isAuthenticated} />
      // ) : (
      //   <Navigate replace to="/signin" />
      // ),
      element: (
        <Protected isAuthenticated={isAuthenticated} setConnect={setConnect}>
          <Chat user={user} isAuthenticated={isAuthenticated} />
        </Protected>
      ),
      children: [
        {
          index: true,
          element: <ChatHome />,
        },
        {
          path: ':recipient',
          element: (
            <Messages
              handleSend={handleSend}
              chat={chat}
              msgs={msgs}
              setChat={setChat}
              to={to}
              setTo={setTo}
              user={user}
            />
          ),
          children: [{ path: 'profile', element: <Profile /> }],
        },
      ],
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
