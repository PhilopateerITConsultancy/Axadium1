import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const ManageUsersPage = () => {
  return <PlaceholderPage title="Manage Users" path="/admin/users/manage" />;
};

ManageUsersPage.getLayout = (page: ReactNode) => <Default pageName="Manage Users">{page}</Default>;

export default ManageUsersPage;
