import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const DashboardPage = () => {
  return <PlaceholderPage title="Dashboard" path="/dashboard" />;
};

DashboardPage.getLayout = (page) => <Default pageName="Dashboard">{page}</Default>;

export default DashboardPage;
