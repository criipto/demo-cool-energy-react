import Modal from './Modal';

interface Props {
  handleLogout: () => void;
  claims: any;
}

function Header(props: Props) {
  const { handleLogout, claims } = props;

  return (
    <header
      className={`header lg:h-20 h-[72px] flex no-wrap justify-between items-center mx-4 md:mr-8 md:mx-10 ${
        window.location.pathname.includes('dashboard') ? 'dashboard-header' : ''
      }`}
    >
      <div className="logo-group flex flex-grow-0">
        <img
          src="/logo-text.png"
          alt="Cool Energy Logo"
          className="h-10 w-[220px]"
        />
      </div>
      <div className="logout flex justify-end">
        {claims ? (
          <button
            onClick={() => handleLogout()}
            className="uppercase text-sm font-medium h-8 w-[150px] bg-primary flex items-center justify-center"
          >
            Log Out
            <img src="/log-out.png" alt="" className="h-5 w-5 ml-1.5" />
          </button>
        ) : (
          <Modal />
        )}
      </div>
    </header>
  );
}

export default Header;
