import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StakingActivityPage = () => {
  return <PlaceholderPage title="Staking Activity" path="/admin/reports/staking" />;
};

StakingActivityPage.getLayout = (page) => <Default pageName="Staking Activity">{page}</Default>;

export default StakingActivityPage;
