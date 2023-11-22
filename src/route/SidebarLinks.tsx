import { CrownFilled, SmileFilled } from '@ant-design/icons';
import { webRoutes } from './RouteLinks';

import { GiCommercialAirplane } from 'react-icons/gi';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: webRoutes.dashboard,
        name: 'Dashboard',
        icon: <SmileFilled />,
        // component: './Welcome',
      },

      {
        path: webRoutes.flight_search,
        name: 'Flight Search',
        icon: <GiCommercialAirplane />,
        // component: './Welcome',
      },

      {
        path: '/admin',
        name: 'Admin',
        icon: <CrownFilled />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: 'Sub Page 1',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            // component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: 'Sub Page 2',
            icon: <CrownFilled />,
            // component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: 'Sub Page 3',
            icon: <CrownFilled />,
            // component: './Welcome',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
