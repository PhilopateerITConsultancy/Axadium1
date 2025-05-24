import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const MyOverviewPage = () => {
  return <PlaceholderPage title="My Overview" path="/dashboard/overview" />;
};

MyOverviewPage.getLayout = (page: ReactNode) => <Default pageName="My Overview">{page}</Default>;

export default MyOverviewPage;
