import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const TransfersPage = () => {
  return <PlaceholderPage title="Transfers" path="/transfers" />;
};

TransfersPage.getLayout = (page: ReactNode) => <Default pageName="Transfers">{page}</Default>;

export default TransfersPage;
