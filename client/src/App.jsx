import './App.css';
import LandingPage from './routes/landing-page/LandingPage.route.jsx';
import Signin from './auth/signin/Signin.auth.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './auth/signup/Signup.auth.jsx';
import Chat from './routes/chat/chat.route.jsx';
import Messages from './routes/messages/Messages.route.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Protected from './auth/protect/protect.auth.jsx';
import Profile from './routes/profile/Profile.route.jsx';
import ChatHome from './component/chat-home/ChatHome.component.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Modal from './component/modal/Modal.component.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [connect, setConnect] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.href.split('/')[2]) {
      setOpen(!open);
      // return;
    }
    // setOpen(false);
  }, []);

  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    {
      path: '/signin',
      element: (
        <Signin
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          socket={setConnect}
        />
      ),
    },
    { path: '/signup', element: <Signup /> },
    {
      path: `/profile/:userId`,
      element: <Profile />,
      // children: [
      //   path: ':userId'
      // ]
    },
    // { path: '/test', element: <Profile /> },
    {
      path: '/chat',
      element: (
        <Protected isAuthenticated={isAuthenticated} setConnect={setConnect}>
          <Chat setIsAuthenticated={setIsAuthenticated} connect={connect} isAuthenticated={isAuthenticated} />
        </Protected>
      ),
      children: [
        {
          index: true,
          element: <ChatHome />,
        },
        {
          path: ':userId',
          element: <Messages />,
          children: [{ path: 'profile', element: <Profile /> }],
        },
        {
          path: 'profile/:userId',
          element: (
            <Modal mode="profile" open={open} onClose={() => setOpen(!open)}>
              <Profile />
            </Modal>
          ),
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
