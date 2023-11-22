import { BreadcrumbProps } from 'antd';
import BasePageContainer from '../../../components/PageContainer';
import { webRoutes } from '../../../route/RouteLinks';
import { Link, useParams } from 'react-router-dom';

import style from '../style/dashboard.module.css';

type Props = {};

const Dashboard = (props: Props) => {
  const { id } = useParams();

  const breadcrumb: BreadcrumbProps = {
    items: [
      {
        key: webRoutes.dashboard,
        title: <Link to={webRoutes.dashboard}>Dashboard</Link>,
      },

      {
        key: webRoutes.dashboard,
        title: <Link to={webRoutes.dashboard}>Dashboard</Link>,
      },
    ],
  };
  return (
    <BasePageContainer breadcrumb={breadcrumb} transparent={true}>
      <div className={style.test}>THIS IS A DASHBOARD PAGE</div>
    </BasePageContainer>
  );
};

export default Dashboard;
