import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthMethodSelector } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import Hero from './Hero';

function Login() {
  const [acrValues, setAcrValues] = useState<string[]>([]);

  const { country } = useParams();

  useEffect(() => {
    try {
      const acrValuesArr: string[] = [];

      if (country?.includes('denmark')) {
        acrValuesArr.push('urn:grn:authn:dk:mitid:low');
      }

      if (country?.includes('sweden')) {
        acrValuesArr.push('urn:grn:authn:se:bankid:same-device');
      }

      if (country?.includes('norway')) {
        acrValuesArr.push('urn:grn:authn:no:bankid:substantial');
      }

      setAcrValues(acrValuesArr);
    } catch (error) {
      console.log(error);
    }
  }, [country]);

  const { environment } = useParams();
  console.log('environment from Login', environment);

  return (
    <>
      <Hero />
      <div className="flex flex-wrap flex-col mb-4 justify-center align-center content-center">
        <h1 className="font-semibold text-xl px-12 md:px-12 m-2 ml-4 mt-16 leading-normal">
          Login to Cool Energy to see your consumption data
        </h1>
        <div className="Auth-container">
          <AuthMethodSelector acrValues={acrValues} />
        </div>
      </div>
    </>
  );
}

export default Login;
