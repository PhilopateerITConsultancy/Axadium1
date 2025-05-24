import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const LegalPage = () => {
  return <PlaceholderPage title="Legal" path="/legal" />;
};

LegalPage.getLayout = (page: ReactNode) => <Default pageName="Legal">{page}</Default>;

export default LegalPage;
