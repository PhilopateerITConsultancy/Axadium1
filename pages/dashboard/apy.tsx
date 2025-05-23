import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StakingAPYPage = () => {
  return <PlaceholderPage title="Staking APY" path="/dashboard/apy" />;
};

StakingAPYPage.getLayout = (page) => <Default pageName="Staking APY">{page}</Default>;

export default StakingAPYPage;
