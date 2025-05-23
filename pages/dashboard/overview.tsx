import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const MyOverviewPage = () => {
  return <PlaceholderPage title="My Overview" path="/dashboard/overview" />;
};

MyOverviewPage.getLayout = (page) => <Default pageName="My Overview">{page}</Default>;

export default MyOverviewPage;
