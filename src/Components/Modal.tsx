import { Fragment, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Dialog, DialogBody, Switch } from '@material-tailwind/react';
import useIsMobile from '../Hooks/useIsMobile';

const countries = ['denmark', 'sweden', 'norway', 'finland'] as const;
type Country = (typeof countries)[number];

interface Props {
  handleShowQr: () => void;
  showQrCode: boolean;
}

export default function Modal(props: Props) {
  const { handleShowQr, showQrCode } = props;
  let [searchParams, setSearchParams] = useSearchParams();
  const { isMobile } = useIsMobile();

  const environment = searchParams.get('environment') ?? 'test';
  const enabledCountries = countries.filter(
    (country) => searchParams.get(country) !== null
  );

  const [open, setOpen] = useState(false);

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
      <Button
        onClick={handleOpen}
        className="bg-transparent shadow-none p-0 hover:shadow-none"
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
          <div className="flex mx-2">
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
                  checked={showQrCode}
                  onChange={handleShowQr}
                />
              </div>
            )}
          </div>
          <div className="checkbox-wrapper flex flex-col m-2">
            {countries.map((country) => {
              const countryName =
                country.charAt(0).toUpperCase() + country.slice(1);
              return (
                <label
                  className="m-2 font-semibold text-darkText h-6 text-l"
                  key={country}
                >
                  <input
                    type="checkbox"
                    className="w-5"
                    checked={enabledCountries.includes(country)}
                    onChange={() => {
                      handleCountry(country);
                    }}
                  />
                  <span className="pl-2 pb-4">{countryName}</span>
                </label>
              );
            })}
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
