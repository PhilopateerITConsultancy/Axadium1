import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const RewardsPage = () => {
  return <PlaceholderPage title="Rewards" path="/features/rewards" />;
};

RewardsPage.getLayout = (page: ReactNode) => <Default pageName="Rewards">{page}</Default>;

export default RewardsPage;
