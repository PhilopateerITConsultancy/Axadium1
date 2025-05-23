import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StakingHistoryPage = () => {
  return <PlaceholderPage title="Staking History" path="/staking/history" />;
};

StakingHistoryPage.getLayout = (page) => <Default pageName="Staking History">{page}</Default>;

export default StakingHistoryPage;
