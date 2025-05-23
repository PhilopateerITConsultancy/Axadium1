import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const RewardsPage = () => {
  return <PlaceholderPage title="Rewards" path="/features/rewards" />;
};

RewardsPage.getLayout = (page) => <Default pageName="Rewards">{page}</Default>;

export default RewardsPage;
