import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const WalletBalancePage = () => {
  return <PlaceholderPage title="Wallet Balance" path="/dashboard/wallet" />;
};

WalletBalancePage.getLayout = (page) => <Default pageName="Wallet Balance">{page}</Default>;

export default WalletBalancePage;
