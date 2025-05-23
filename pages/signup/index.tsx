import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const SignUpPage = () => {
  return <PlaceholderPage title="Sign Up" path="/signup" />;
};

SignUpPage.getLayout = (page) => <Default pageName="Sign Up">{page}</Default>;

export default SignUpPage;
