import { useSearchParams } from 'react-router-dom';
import { useCriiptoVerify } from '@criipto/verify-react';

const useWalletMode = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get('wallet');
};

const useWalletLogin = () => {
  const { loginWithRedirect } = useCriiptoVerify();

  const handleWalletLogin = () => {
    loginWithRedirect({
      acrValues: 'urn:authn:vc:danish_identity',
      redirectUri: `${window.location.origin}/login/callback?wallet=true`,
    });
  };
  return handleWalletLogin;
};

export { useWalletMode, useWalletLogin };
