import { Navigate } from 'react-router-dom';

const Protected = ({ isAuthenticated, setConnect, children }) => {
  if (isAuthenticated || localStorage.getItem('token')) {
    setConnect(true)
    return <>{children}</>;
  }
  return <Navigate replace to="/signin" />;
};

export default Protected;
