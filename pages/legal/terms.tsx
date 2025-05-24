import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const TermsPage = () => {
  return <PlaceholderPage title="Terms" path="/legal/terms" />;
};

TermsPage.getLayout = (page: ReactNode) => <Default pageName="Terms">{page}</Default>;

export default TermsPage;
