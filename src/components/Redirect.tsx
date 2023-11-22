import { Navigate } from 'react-router-dom';
import { webRoutes } from '../route/RouteLinks';



const Redirect = () => {
  const admin = true;

  return (
    <Navigate to={admin ? webRoutes.dashboard : webRoutes.login} replace />
  )
}

export default Redirect