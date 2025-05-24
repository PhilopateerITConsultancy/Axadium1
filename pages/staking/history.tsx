import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const StakingHistoryPage = () => {
  return <PlaceholderPage title="Staking History" path="/staking/history" />;
};

StakingHistoryPage.getLayout = (page: ReactNode) => <Default pageName="Staking History">{page}</Default>;

export default StakingHistoryPage;
