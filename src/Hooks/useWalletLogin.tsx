import { useCriiptoVerify } from '@criipto/verify-react';

function useWalletLogin() {
  const { loginWithRedirect } = useCriiptoVerify();

  const handleWalletLogin = () => {
    loginWithRedirect({
      acrValues: 'urn:authn:vc:danish_identity',
      redirectUri: `${window.location.origin}/login/callback`,
    });
  };

  return handleWalletLogin;
}

export default useWalletLogin;