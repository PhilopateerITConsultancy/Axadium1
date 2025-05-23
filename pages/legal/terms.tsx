import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const TermsPage = () => {
  return <PlaceholderPage title="Terms" path="/legal/terms" />;
};

TermsPage.getLayout = (page) => <Default pageName="Terms">{page}</Default>;

export default TermsPage;
