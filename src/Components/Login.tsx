import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthMethodSelector } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import Hero from './Hero';

function Login() {
  const location = useLocation();
  const search = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );

  const acrValues = useMemo(() => {
    const acrValues: string[] = [];

    if (search.get('denmark') !== null) {
      acrValues.push('urn:grn:authn:dk:mitid:low');
    }

    if (search.get('sweden') !== null) {
      acrValues.push('urn:grn:authn:se:bankid:same-device');
    }

    if (search.get('norway') !== null) {
      acrValues.push('urn:grn:authn:no:bankid:substantial');
    }

    return acrValues;
  }, [search]);

  return (
    <div className="flex flex-col justify-between md:flex-col-reverse h-full">
      <Hero />
      <div className="flex flex-wrap flex-col mt-8 lg:mt-0 justify-center align-bottom content-center">
        <h1 className="font-semibold text-xl px-1 m-2 ml-4 lg:m-0 lg:mt-8 leading-normal">
          Login to Cool Energy to see your consumption data
        </h1>
        <AuthMethodSelector
          acrValues={acrValues.length ? acrValues : undefined}
        />
      </div>
    </div>
  );
}

export default Login;
