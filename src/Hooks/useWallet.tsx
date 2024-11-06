import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCriiptoVerify } from '@criipto/verify-react';

const useWalletMode = (): boolean =>  {
  const [searchParams] = useSearchParams();
  return searchParams.get('wallet') === 'true';
};

const useWalletLogin = () => {
  const { loginWithRedirect } = useCriiptoVerify();

  const handleWalletLogin = useMemo(() => {
    return () => {
      loginWithRedirect({
        acrValues: 'urn:authn:vc:danish_identity',
        redirectUri: `${window.location.origin}/login/callback?wallet=true`,
      });
    };
  }, [loginWithRedirect]);
  return handleWalletLogin;
};

export { useWalletMode, useWalletLogin };
