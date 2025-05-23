import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const LoansPage = () => {
  return <PlaceholderPage title="Loans" path="/loans" />;
};

LoansPage.getLayout = (page) => <Default pageName="Loans">{page}</Default>;

export default LoansPage;
