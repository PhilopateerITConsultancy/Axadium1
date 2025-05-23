import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const BalancesPage = () => {
  return <PlaceholderPage title="Balances" path="/balances" />;
};

BalancesPage.getLayout = (page) => <Default pageName="Balances">{page}</Default>;

export default BalancesPage;
