import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const AboutPage = () => {
  return <PlaceholderPage title="About" path="/about" />;
};

AboutPage.getLayout = (page) => <Default pageName="About">{page}</Default>;

export default AboutPage;
