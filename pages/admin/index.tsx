import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const AdminDashboardPage = () => {
  return <PlaceholderPage title="Admin Dashboard" path="/admin" />;
};

AdminDashboardPage.getLayout = (page) => <Default pageName="Admin Dashboard">{page}</Default>;

export default AdminDashboardPage;
