import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const ActiveLoansPage = () => {
  return <PlaceholderPage title="Active Loans" path="/dashboard/loans" />;
};

ActiveLoansPage.getLayout = (page: ReactNode) => <Default pageName="Active Loans">{page}</Default>;

export default ActiveLoansPage;
