import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';
import { ReactNode } from 'react';

const CreditScoringConsentPage = () => {
  return <PlaceholderPage title="Credit Scoring Consent" path="/kyc/credit" />;
};

CreditScoringConsentPage.getLayout = (page: ReactNode) => <Default pageName="Credit Scoring Consent">{page}</Default>;

export default CreditScoringConsentPage;
