import { Navigate } from 'react-router-dom';

const Protected = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate replace to="/signin" />;
  }
  return <>{children}</>;
};

export default Protected;
