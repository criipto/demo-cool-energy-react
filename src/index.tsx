import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { CriiptoVerifyProvider } from '@criipto/verify-react';
import App from './App';
import './index.css';
import '@fontsource/ibm-plex-sans';

function CriiptoVerifyProviderWrapper() {
  const location = useLocation();
  const search = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );

  const environment = search.get('environment') ?? 'test';

  const domain =
    environment === 'test' ? 'demos-test.criipto.id' : 'demos.criipto.id';

  return (
    <CriiptoVerifyProvider
      domain={domain}
      clientID="urn:demos:cool-energy-react"
      redirectUri={window.location.origin + '/login'}
      sessionStore={window.sessionStorage}
      message="Log in to Cool Energy"
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
