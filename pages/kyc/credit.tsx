import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const CreditScoringConsentPage = () => {
  return <PlaceholderPage title="Credit Scoring Consent" path="/kyc/credit" />;
};

CreditScoringConsentPage.getLayout = (page) => <Default pageName="Credit Scoring Consent">{page}</Default>;

export default CreditScoringConsentPage;
