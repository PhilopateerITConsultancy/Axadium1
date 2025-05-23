import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StakingPage = () => {
  return <PlaceholderPage title="Staking" path="/staking" />;
};

StakingPage.getLayout = (page) => <Default pageName="Staking">{page}</Default>;

export default StakingPage;
