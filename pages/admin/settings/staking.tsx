import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StakingAPYConfigPage = () => {
  return <PlaceholderPage title="Staking/APY Config" path="/admin/settings/staking" />;
};

StakingAPYConfigPage.getLayout = (page) => <Default pageName="Staking/APY Config">{page}</Default>;

export default StakingAPYConfigPage;
