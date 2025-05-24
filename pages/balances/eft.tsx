import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const EFTBalancesPage = () => {
  return <PlaceholderPage title="EFT Balances" path="/balances/eft" />;
};

EFTBalancesPage.getLayout = (page: ReactNode) => <Default pageName="EFT Balances">{page}</Default>;

export default EFTBalancesPage;
