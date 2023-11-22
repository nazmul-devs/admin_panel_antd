import { Navigate, useLocation } from 'react-router-dom';

export type RequireAuthProps = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: RequireAuthProps) => {
  const admin = true;
  const location = useLocation();

  if (!admin) {
    return <Navigate to={'../login'} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
