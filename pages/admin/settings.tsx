import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const SettingsPage = () => {
  return <PlaceholderPage title="Settings" path="/admin/settings" />;
};

SettingsPage.getLayout = (page: ReactNode) => <Default pageName="Settings">{page}</Default>;

export default SettingsPage;
