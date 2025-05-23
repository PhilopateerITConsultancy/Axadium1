import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const LoanIssuancePage = () => {
  return <PlaceholderPage title="Loan Issuance" path="/admin/reports/loans" />;
};

LoanIssuancePage.getLayout = (page) => <Default pageName="Loan Issuance">{page}</Default>;

export default LoanIssuancePage;
