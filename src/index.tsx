import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CriiptoVerifyProvider } from '@criipto/verify-react';
import App from './App';
import useSearch from './Hooks/useSearch';
import { useWalletMode } from './Hooks/useWallet';
import './index.css';
import '@fontsource/ibm-plex-sans';
import '@fortawesome/fontawesome-free/css/all.css';

function CriiptoVerifyProviderWrapper() {
  const search = useSearch();
  const walletMode = useWalletMode();
  const environment = search.get('environment') ?? 'test';

  const domain =
    environment === 'test' ? 'demos-test.criipto.id' : 'demos.criipto.id';

  return (
    <CriiptoVerifyProvider
      domain={domain}
      clientID="urn:demos:cool-energy-react"
      redirectUri={`${walletMode ? window.location.origin + '/login/callback?wallet=true' : window.location.origin + '/login/callback'}`}
      sessionStore={window.sessionStorage}
      message="Log in to Cool Energy"
      scope="openid ssn address phone"
    >
      <App />
    </CriiptoVerifyProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CriiptoVerifyProviderWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
