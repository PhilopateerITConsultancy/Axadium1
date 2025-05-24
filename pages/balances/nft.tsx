import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const NFTBalancesPage = () => {
  return <PlaceholderPage title="NFT Balances" path="/balances/nft" />;
};

NFTBalancesPage.getLayout = (page: ReactNode) => <Default pageName="NFT Balances">{page}</Default>;

export default NFTBalancesPage;
