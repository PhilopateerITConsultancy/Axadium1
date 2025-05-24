import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const OverviewPage = () => {
  return <PlaceholderPage title="Overview" path="/admin/overview" />;
};

OverviewPage.getLayout = (page: ReactNode) => <Default pageName="Overview">{page}</Default>;

export default OverviewPage;
