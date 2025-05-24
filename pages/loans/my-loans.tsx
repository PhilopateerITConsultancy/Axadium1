import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const MyLoansPage = () => {
  return <PlaceholderPage title="My Loans" path="/loans/my-loans" />;
};

MyLoansPage.getLayout = (page: ReactNode) => <Default pageName="My Loans">{page}</Default>;

export default MyLoansPage;
