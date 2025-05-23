import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const OverviewPage = () => {
  return <PlaceholderPage title="Overview" path="/overview" />;
};

OverviewPage.getLayout = (page) => <Default pageName="Overview">{page}</Default>;

export default OverviewPage;
