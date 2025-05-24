import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const EFTTransfersPage = () => {
  return <PlaceholderPage title="EFT Transfers" path="/transfers/eft" />;
};

EFTTransfersPage.getLayout = (page: ReactNode) => <Default pageName="EFT Transfers">{page}</Default>;

export default EFTTransfersPage;
