import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const HelpCenterPage = () => {
  return <PlaceholderPage title="Help Center" path="/support/help" />;
};

HelpCenterPage.getLayout = (page) => <Default pageName="Help Center">{page}</Default>;

export default HelpCenterPage;
