import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const RewardsEarningsPage = () => {
  return <PlaceholderPage title="Rewards & Earnings" path="/staking/rewards" />;
};

RewardsEarningsPage.getLayout = (page: ReactNode) => <Default pageName="Rewards & Earnings">{page}</Default>;

export default RewardsEarningsPage;
