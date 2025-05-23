import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const FeaturesPage = () => {
  return <PlaceholderPage title="Features" path="/features" />;
};

FeaturesPage.getLayout = (page) => <Default pageName="Features">{page}</Default>;

export default FeaturesPage;
