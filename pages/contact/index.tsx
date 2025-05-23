import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const ContactPage = () => {
  return <PlaceholderPage title="Contact" path="/contact" />;
};

ContactPage.getLayout = (page) => <Default pageName="Contact">{page}</Default>;

export default ContactPage;
