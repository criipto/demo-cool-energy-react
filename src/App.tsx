import { Routes, Route, Navigate } from 'react-router-dom';
import { useCriiptoVerify } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Login from './Components/Login';
import HomeDesktop from './Components/HomeDesktop';
import Loading from './Components/LoginCallback';
import { useWalletMode } from './Hooks/useWallet';
import './App.css';

function App() {
  const { claims, logout } = useCriiptoVerify();
  let mql = window.matchMedia('(min-width: 1024px)');
  const walletMode = useWalletMode();

  const handleLogout = () => {
    logout({ redirectUri: walletMode ? `${window.location.origin}/?wallet=true` : window.location.origin });
  };

  const loginRoutes = (
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/login/callback" element={<Loading />} />
      <Route path="/dashboard" element={<Navigate to="/login" />} />
    </>
  );

  return (
    <div className="App">
      <Header handleLogout={handleLogout} claims={claims} />

      <Routes>
        {claims ? (
          <>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="/login/callback" element={<Loading />} />
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard claims={claims} />} />
          </>
        ) : mql.matches ? (
          <>
            <Route index element={<HomeDesktop />} />
            {loginRoutes}
          </>
        ) : (
          <>
            <Route index element={<Navigate to="/login" />} />
            {loginRoutes}
          </>
        )}
        <Route
          path="*"
          element={
            <div className="flex justify-center align-center">
              <h1 className="font-semibold text-2xl m-16 ml-4 mt-16 leading-normal">
                Page not found
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
