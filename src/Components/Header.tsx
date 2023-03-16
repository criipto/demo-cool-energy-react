import Modal from './Modal';

interface Props {
  handleLogout: () => void;
  claims: any;
}

function Header(props: Props) {
  const { handleLogout, claims } = props;

  return (
    <header className="flex no-wrap mb-4 px-0 lg:px-4 py-6 mt-1 md:mt-4 justify-between items-center">
      <div className="logo-group flex flex-grow-0 ml-6">
        <img src="/logo.png" alt="Cool Energy Logo" className="h-5 mt-1" />
        <p className="text-lg font-bold uppercase ml-1">Cool Energy</p>
      </div>
      <div className="flex justify-end">
        {!claims && <Modal />}
        <nav className="container-hidden-small-screens flex mr-4 mt-2">
          <ul>
            {/* <NavLink className="mr-6" to="/">
              Home
            </NavLink> */}
            {/* {claims ? (
              <NavLink className="mr-6" to="/dashboard">
                Dashboard
              </NavLink>
            ) : (
              <NavLink className="mr-6" to="/login/test/denmark">
                Login
              </NavLink>
            )} */}
          </ul>
        </nav>
        {claims && (
          <button
            onClick={() => handleLogout()}
            className="uppercase font-normal mr-6 p-2 mt-0 bg-primary px-4 text-white h-44px w-150px px-32px py-6px text-white!"
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
