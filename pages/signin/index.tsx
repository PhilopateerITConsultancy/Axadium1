import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const SignInPage = () => {
  return <PlaceholderPage title="Sign In" path="/signin" />;
};

SignInPage.getLayout = (page) => <Default pageName="Sign In">{page}</Default>;

export default SignInPage;
