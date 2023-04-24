import './App.css';
import LandingPage from './routes/landing-page/LandingPage.route';
import Signin from './auth/signin/Signin.auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './auth/signup/Signup.auth';
import Messages from './routes/messages/Messages.route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Protected from './auth/protect/protect.auth';
import Profile from './routes/profile/Profile.route';
import ChatHome from './component/chat-home/ChatHome.component';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Modal from './component/modal/Modal.component';
import Chat from './routes/chat/Chat.route';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [connect, setConnect] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.href.split('/')[2]) {
      setOpen(!open);
   }
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
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
