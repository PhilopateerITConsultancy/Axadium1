import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const HelpCenterPage = () => {
  return <PlaceholderPage title="Help Center" path="/support/help" />;
};

HelpCenterPage.getLayout = (page: ReactNode) => <Default pageName="Help Center">{page}</Default>;

export default HelpCenterPage;
