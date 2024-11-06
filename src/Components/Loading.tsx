import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCriiptoVerify } from '@criipto/verify-react';
import { useWalletMode } from '../Hooks/useWallet';

const Loading = () => {
  const navigate = useNavigate();
  const { claims } = useCriiptoVerify();
  const walletMode = useWalletMode();

  useEffect(() => {
    // Set up a timeout to check for claims
    const timer = setTimeout(() => {
      if (!claims) {
        navigate(`/login${walletMode ? '?wallet=true' : ''}`);
      }
    }, 4000);

    if (claims) {
      clearTimeout(timer);
      navigate(`/dashboard${walletMode ? '?wallet=true' : ''}`);
    }
    return () => clearTimeout(timer);
  }, [claims, navigate, walletMode]);

  return (
    <div className="flex items-center justify-center h-screen space-x-2">
      <i className="fa fa-spinner fa-pulse fa-lg text-primary" />
      <h2 className="text-primary text-xl font-medium">Loading</h2>
    </div>
  );
};

export default Loading;
