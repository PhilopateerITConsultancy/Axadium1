import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const SmartContractSettingsPage = () => {
  return <PlaceholderPage title="Smart Contract Settings" path="/admin/settings/contracts" />;
};

SmartContractSettingsPage.getLayout = (page) => <Default pageName="Smart Contract Settings">{page}</Default>;

export default SmartContractSettingsPage;
