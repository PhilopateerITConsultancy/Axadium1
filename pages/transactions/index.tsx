import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const TransactionsPage = () => {
  return <PlaceholderPage title="Transactions" path="/transactions" />;
};

TransactionsPage.getLayout = (page) => <Default pageName="Transactions">{page}</Default>;

export default TransactionsPage;
