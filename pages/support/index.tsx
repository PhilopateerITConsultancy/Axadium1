import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const SupportPage = () => {
  return <PlaceholderPage title="Support" path="/support" />;
};

SupportPage.getLayout = (page) => <Default pageName="Support">{page}</Default>;

export default SupportPage;
