import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const SmartContractSettingsPage = () => {
  return <PlaceholderPage title="Smart Contract Settings" path="/admin/settings/contracts" />;
};

SmartContractSettingsPage.getLayout = (page: ReactNode) => <Default pageName="Smart Contract Settings">{page}</Default>;

export default SmartContractSettingsPage;
