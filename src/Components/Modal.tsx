import { Fragment, useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Button, Dialog, DialogBody, Switch } from '@material-tailwind/react';
import useIsMobile from '../Hooks/useIsMobile';
import { useWalletMode } from '../Hooks/useWallet';

const countries = ['denmark', 'sweden', 'norway', 'finland'] as const;
type Country = (typeof countries)[number];

export default function Modal() {
  const [open, setOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const { isMobile } = useIsMobile();
  const location = useLocation();

  const environment = searchParams.get('environment') ?? 'test';

  const qr = searchParams.get('qr');

  const enabledCountries = countries.filter(
    (country) => searchParams.get(country) !== null
  );

  const handleOpen = () => setOpen(!open);

  const handleToggleEnv = () => {
    setSearchParams((params) => {
      params.set(
        'environment',
        params.get('environment') === 'test' ? 'production' : 'test'
      );
      return params;
    });
  };

  const handleToggleQr = () => {
    setSearchParams((params) => {
      if (qr === 'true') {
        params.delete('qr');
      } else {
        params.set('qr', 'true');
      }
      return params;
    });
  };

  const walletMode = useWalletMode();

  useEffect(() => {
    if (walletMode === 'true') {
      searchParams.set('wallet', 'true');
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, walletMode]);

  const handleWalletToggle = () => {
    setSearchParams((params) => {
      if (walletMode === 'true') {
        params.delete('wallet');
      } else {
        params.set('wallet', 'true');
      }
      return params;
    });
  };

  function handleCountry(country: Country) {
    if (enabledCountries.includes(country)) {
      setSearchParams((params) => {
        params.delete(country);
        return params;
      });
    } else {
      setSearchParams((params) => {
        params.set(country, '');
        return params;
      });
    }
  }

  return (
    <Fragment>
      {location.pathname === '/login' ? (
        <>
          <Button
            onClick={handleOpen}
            className="z-10 bg-transparent shadow-none p-0 hover:shadow-none"
          >
            <img
              src="/gear-icon.png"
              alt="Cool Energy Logo"
              className="h-5 m-1 mt-1.5"
            />
          </Button>
          <Dialog
            open={open}
            handler={handleOpen}
            className="bg-background w-96 lg:w-full mr-3"
          >
            <DialogBody>
              <div className={`flex mx-2 ${isMobile ? 'flex-col' : ''}`}>
                <div className="m-2">
                  <Switch
                    id="env-toggle"
                    label="Production"
                    color="indigo"
                    checked={environment === 'production'}
                    onChange={handleToggleEnv}
                  />
                </div>
                {!isMobile && (
                  <div className="m-2">
                    <Switch
                      id="qr-toggle"
                      label="QR code"
                      color="indigo"
                      checked={qr === 'true'}
                      onChange={handleToggleQr}
                    />
                  </div>
                )}
                <div className="m-2">
                  <Switch 
                    id="wallet-toggle" 
                    label="Wallet mode" 
                    color="indigo" 
                    checked={walletMode === 'true'} 
                    onChange={handleWalletToggle} 
                  />
                </div>
              </div>
              <div className="checkbox-wrapper flex flex-col m-2">
                {countries.map((country) => {
                  const countryName = country.charAt(0).toUpperCase() + country.slice(1);
                  return (
                    <label
                      className="m-2 font-semibold text-darkText h-6 text-l"
                      key={country}
                    >
                      <input
                        type="checkbox"
                        className={`w-5 ${walletMode ? 'bg-gray-200 cursor-not-allowed opacity-50' : ''}`}
                        checked={enabledCountries.includes(country)}
                        onChange={() => {
                          handleCountry(country);
                        }}
                      />
                      <span className={`pl-2 pb-4 ${walletMode ? 'opacity-50' : ''}`}>{countryName}</span>
                    </label>
                  );
                })}
              </div>
            </DialogBody>
          </Dialog>
        </>
      ) : location.pathname === '/' ? (
        <Switch
          id="wallet-toggle"
          color="indigo"
          checked={walletMode === 'true'} 
          onChange={handleWalletToggle}
          label={<span className="text-primary font-semibold cursor-pointer">Wallet mode</span>}
        />
      ) : null}
    </Fragment>
  );
}
