import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const DashboardPage = () => {
  return <PlaceholderPage title="Dashboard" path="/dashboard" />;
};

DashboardPage.getLayout = (page: ReactNode) => <Default pageName="Dashboard">{page}</Default>;

export default DashboardPage;
