import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const UsersPage = () => {
  return <PlaceholderPage title="Users" path="/admin/users" />;
};

UsersPage.getLayout = (page: ReactNode) => <Default pageName="Users">{page}</Default>;

export default UsersPage;
