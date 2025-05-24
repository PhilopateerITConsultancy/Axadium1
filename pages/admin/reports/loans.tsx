import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const LoanIssuancePage = () => {
  return <PlaceholderPage title="Loan Issuance" path="/admin/reports/loans" />;
};

LoanIssuancePage.getLayout = (page: ReactNode) => <Default pageName="Loan Issuance">{page}</Default>;

export default LoanIssuancePage;
