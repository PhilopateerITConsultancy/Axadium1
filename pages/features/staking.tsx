import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StakingOverviewPage = () => {
  return <PlaceholderPage title="Staking Overview" path="/features/staking" />;
};

StakingOverviewPage.getLayout = (page) => <Default pageName="Staking Overview">{page}</Default>;

export default StakingOverviewPage;
