import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const SupportPage = () => {
  return <PlaceholderPage title="Support" path="/support" />;
};

SupportPage.getLayout = (page: ReactNode) => <Default pageName="Support">{page}</Default>;

export default SupportPage;
