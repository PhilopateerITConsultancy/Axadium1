import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const HowItWorksPage = () => {
  return <PlaceholderPage title="How It Works" path="/how-it-works" />;
};

HowItWorksPage.getLayout = (page) => <Default pageName="How It Works">{page}</Default>;

export default HowItWorksPage;
