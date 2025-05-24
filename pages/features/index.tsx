import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const FeaturesPage = () => {
  return <PlaceholderPage title="Features" path="/features" />;
};

FeaturesPage.getLayout = (page: ReactNode) => <Default pageName="Features">{page}</Default>;

export default FeaturesPage;
