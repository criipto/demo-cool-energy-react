import { Fragment, useState, useMemo } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Switch,
} from '@material-tailwind/react';

type Country = 'Denmark' | 'Sweden' | 'Norway';

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [isTest, setIsTest] = useState(true);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  // const { environment } = useParams();

  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);

  const countries: Country[] = ['Denmark', 'Sweden', 'Norway'];

  // Render login buttons for selected countries
  function handleSelection(country: Country) {
    setSelectedCountries((prevState) => {
      if (prevState.includes(country)) {
        return prevState.filter((c) => c !== country);
      } else {
        return [...prevState, country];
      }
    });
  }

  function handleConfirm() {
    const sortedCountries = selectedCountries.slice().sort();
    const countriesParam = sortedCountries.join('&').toLowerCase();
    const envParam = isTest ? 'test' : 'prod';
    navigate(`login/${envParam}/${countriesParam}`);
    handleOpen();
  }

  const handleToggleEnv = () => {
    setIsTest(!isTest);
  };

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        className="bg-transparent ml-2 p-0 shadow-none"
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
        className="bg-background w-96 lg:w-full"
      >
        <DialogHeader className="text-darkText">
          Login with selected eIDs
        </DialogHeader>
        <DialogBody divider>
          <Switch
            id="env-toggle"
            label="Switch to Production"
            className="font-semibold text-darkText"
            color="indigo"
            checked={!isTest}
            onChange={handleToggleEnv}
          />
          <div className="checkbox-wrapper flex flex-col m-2">
            {countries.map((country) => {
              return (
                <label
                  className="m-2 font-semibold text-darkText h-6 text-l"
                  key={country}
                >
                  <input
                    type="checkbox"
                    className="w-5"
                    checked={selectedCountries.includes(country as Country)}
                    onChange={() => {
                      handleSelection(country as Country);
                    }}
                  />
                  <span className="pl-2 pb-4">{country}</span>
                </label>
              );
            })}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
