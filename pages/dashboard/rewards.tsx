import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const RewardsEarnedPage = () => {
  return <PlaceholderPage title="Rewards Earned" path="/dashboard/rewards" />;
};

RewardsEarnedPage.getLayout = (page) => <Default pageName="Rewards Earned">{page}</Default>;

export default RewardsEarnedPage;
