import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const LoansPage = () => {
  return <PlaceholderPage title="Loans" path="/loans" />;
};

LoansPage.getLayout = (page: ReactNode) => <Default pageName="Loans">{page}</Default>;

export default LoansPage;
