import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const SettingsPage = () => {
  return <PlaceholderPage title="Settings" path="/admin/settings" />;
};

SettingsPage.getLayout = (page) => <Default pageName="Settings">{page}</Default>;

export default SettingsPage;
