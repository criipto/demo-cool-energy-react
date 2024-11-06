import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CriiptoVerifyProvider } from '@criipto/verify-react';
import App from './App';
import useSearch from './Hooks/useSearch';
import './index.css';
import '@fontsource/ibm-plex-sans';
import '@fortawesome/fontawesome-free/css/all.css';

function CriiptoVerifyProviderWrapper() {
  const search = useSearch();

  const environment = search.get('environment') ?? 'test';

  const domain =
    environment === 'test' ? 'demos-test.criipto.id' : 'demos.criipto.id';

  return (
    <CriiptoVerifyProvider
      domain={domain}
      clientID="urn:demos:cool-energy-react"
      redirectUri={window.location.origin + '/login/callback'}
      sessionStore={window.sessionStorage}
      message="Log in to Cool Energy"
      scope="openid ssn address"
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
