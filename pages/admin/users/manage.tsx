import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const ManageUsersPage = () => {
  return <PlaceholderPage title="Manage Users" path="/admin/users/manage" />;
};

ManageUsersPage.getLayout = (page) => <Default pageName="Manage Users">{page}</Default>;

export default ManageUsersPage;
