import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const ReportsPage = () => {
  return <PlaceholderPage title="Reports" path="/admin/reports" />;
};

ReportsPage.getLayout = (page: ReactNode) => <Default pageName="Reports">{page}</Default>;

export default ReportsPage;
