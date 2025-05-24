import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const RewardsEarnedPage = () => {
  return <PlaceholderPage title="Rewards Earned" path="/dashboard/rewards" />;
};

RewardsEarnedPage.getLayout = (page: ReactNode) => <Default pageName="Rewards Earned">{page}</Default>;

export default RewardsEarnedPage;
