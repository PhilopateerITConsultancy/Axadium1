import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const StakeNowPage = () => {
  return <PlaceholderPage title="Stake Now" path="/staking/new" />;
};

StakeNowPage.getLayout = (page) => <Default pageName="Stake Now">{page}</Default>;

export default StakeNowPage;
