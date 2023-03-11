import './App.css';
import LandingPage from './routes/landing-page/LandingPage.route';
import Signin from './auth/signin/Signin.auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './auth/signup/Signup.auth';
import Chat from './routes/chat/chat.route';
import Messages from './routes/messages/Messages.route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    {
      path: '/chat',
      element: <Chat />,
      children: [
        {
          path: ':user',
          element: <Messages />,
        },
      ],
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
