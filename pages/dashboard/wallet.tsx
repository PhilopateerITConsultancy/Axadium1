import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const WalletBalancePage = () => {
  return <PlaceholderPage title="Wallet Balance" path="/dashboard/wallet" />;
};

WalletBalancePage.getLayout = (page: ReactNode) => <Default pageName="Wallet Balance">{page}</Default>;

export default WalletBalancePage;
