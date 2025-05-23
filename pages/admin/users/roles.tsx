import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const RolePermissionsPage = () => {
  return <PlaceholderPage title="Role Permissions" path="/admin/users/roles" />;
};

RolePermissionsPage.getLayout = (page) => <Default pageName="Role Permissions">{page}</Default>;

export default RolePermissionsPage;
