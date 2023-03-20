import { Routes, Route, Navigate } from 'react-router-dom';
import { useCriiptoVerify } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Login from './Components/Login';
import HomeDesktop from './Components/HomeDesktop';
import './App.css';

function App() {
  let mql = window.matchMedia('(min-width: 1024px)');
  const { claims, logout } = useCriiptoVerify();

  const handleLogout = () => {
    logout({ redirectUri: window.location.origin + '/' });
  };

  return (
    <div className="App">
      <Header handleLogout={handleLogout} claims={claims} />

      <Routes>
        {claims ? (
          <Route index element={<Navigate to="/dashboard" />} />
        ) : mql.matches ? (
          <Route index element={<HomeDesktop />} />
        ) : (
          <Route index element={<Login />} />
        )}
        {claims && (
          <Route path="/login" element={<Navigate to="/dashboard" />} />
        )}
        <Route path="login" element={<Login />} />
        {!claims && (
          <Route path="/dashboard" element={<Navigate to="/login" />} />
        )}
        <Route path="dashboard" element={<Dashboard claims={claims} />} />
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
