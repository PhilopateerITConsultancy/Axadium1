import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const LoansOverviewPage = () => {
  return <PlaceholderPage title="Loans Overview" path="/features/loans" />;
};

LoansOverviewPage.getLayout = (page: ReactNode) => <Default pageName="Loans Overview">{page}</Default>;

export default LoansOverviewPage;
