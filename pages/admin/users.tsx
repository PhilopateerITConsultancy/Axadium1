import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const UsersPage = () => {
  return <PlaceholderPage title="Users" path="/admin/users" />;
};

UsersPage.getLayout = (page) => <Default pageName="Users">{page}</Default>;

export default UsersPage;
