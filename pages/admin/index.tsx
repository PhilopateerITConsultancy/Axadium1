import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const AdminDashboardPage = () => {
  return <PlaceholderPage title="Admin Dashboard" path="/admin" />;
};

AdminDashboardPage.getLayout = (page: ReactNode) => <Default pageName="Admin Dashboard">{page}</Default>;

export default AdminDashboardPage;
