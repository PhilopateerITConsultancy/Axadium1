import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const LoanHistoryPage = () => {
  return <PlaceholderPage title="Loan History" path="/loans/history" />;
};

LoanHistoryPage.getLayout = (page: ReactNode) => <Default pageName="Loan History">{page}</Default>;

export default LoanHistoryPage;
