import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../modules/not_found/ErrorPage';
import Redirect from '../components/Redirect';
import RequireAuth from '../components/RequireAuth';
import { webRoutes } from './RouteLinks';
import Dashboard from '../modules/dashboard/pages/Dashboard';
import Layout from '../components/Layout';
import NotFound from '../modules/not_found/NotFound';
import Login from '../modules/login/pages/Login';
import AuthLayout from '../components/AuthLayout';
import FlightSearch from '../modules/flight_search/pages/FlightSearch';

const errorElement = <ErrorPage />;

export const browserRouter = createBrowserRouter([
  {
    path: webRoutes.home,
    element: <Redirect />,
    errorElement: errorElement,
  },

  // auth routes
  {
    element: <AuthLayout />,
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.login,
        element: <Login />,
      },
    ],
  },

  // protected routes
  {
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: webRoutes.flight_search,
        element: <FlightSearch />,
      },
      {
        path: webRoutes.about,
        element: <Dashboard />,
      },
      // 404
      {
        path: '*',
        element: <NotFound />,
        errorElement: errorElement,
      },
    ],
  },
]);
