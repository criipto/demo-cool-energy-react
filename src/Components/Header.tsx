import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';

interface Props {
  handleLogout: () => void;
  claims: any;
}

function Header(props: Props) {
  const { handleLogout, claims } = props;

  const location = useLocation();
  const search = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );

  return (
    <header
      className={`header lg:h-80px h-72px flex no-wrap justify-between items-center mx-4 md:mr-32px md:mx-40px ${
        window.location.pathname.includes('dashboard') ? 'dashboard-header' : ''
      }`}
    >
      <div className="logo-group flex flex-grow-0">
        <img
          src="/logo-text.png"
          alt="Cool Energy Logo"
          className="h-40px w-220px"
        />
      </div>
      <div className="logout flex justify-end">
        {claims ? (
          <button
            onClick={() => handleLogout()}
            className="uppercase text-sm font-medium h-32px w-150px bg-primary flex items-center justify-center"
          >
            Log Out
            <img src="/log-out.png" className="h-5 w-5 ml-1.5" />
          </button>
        ) : (
          <Modal />
        )}
      </div>
    </header>
  );
}

export default Header;
