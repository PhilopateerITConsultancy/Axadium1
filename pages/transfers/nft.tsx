import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const NFTTransfersPage = () => {
  return <PlaceholderPage title="NFT Transfers" path="/transfers/nft" />;
};

NFTTransfersPage.getLayout = (page: ReactNode) => <Default pageName="NFT Transfers">{page}</Default>;

export default NFTTransfersPage;
