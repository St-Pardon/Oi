import './App.css';
import LandingPage from './routes/landing-page/LandingPage.route';
import Signin from './auth/signin/Signin.auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './auth/signup/Signup.auth';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
