import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const LoansOverviewPage = () => {
  return <PlaceholderPage title="Loans Overview" path="/features/loans" />;
};

LoansOverviewPage.getLayout = (page) => <Default pageName="Loans Overview">{page}</Default>;

export default LoansOverviewPage;
