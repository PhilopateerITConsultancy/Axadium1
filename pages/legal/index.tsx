import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const LegalPage = () => {
  return <PlaceholderPage title="Legal" path="/legal" />;
};

LegalPage.getLayout = (page) => <Default pageName="Legal">{page}</Default>;

export default LegalPage;
