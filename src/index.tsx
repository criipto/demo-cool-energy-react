import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  useLocation,
  useParams,
  useMatch,
} from 'react-router-dom';
import { CriiptoVerifyProvider } from '@criipto/verify-react';
import App from './App';
import './index.css';

function CriiptoVerifyProviderWrapper() {
  // const location = useLocation();
  // const search = useMemo(
  //   () => new URLSearchParams(location.search),
  //   [location]
  // );

  // const environment = search.get('environment') ?? 'test';

  const { environment } = useParams();
  console.log('environment from CriiptoVerifyProviderWrapper', environment);
  const match = useMatch('/login/:environment');
  const defaultEnvironment = match ? match.params.environment : 'test';

  const domain =
    defaultEnvironment === 'test'
      ? 'demos.criipto.id'
      : 'demos-test.criipto.id';

  return (
    <CriiptoVerifyProvider
      domain={domain}
      clientID="urn:demos:cool-energy-react"
      redirectUri="http://localhost:3000/dashboard"
      sessionStore={window.sessionStorage}
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
