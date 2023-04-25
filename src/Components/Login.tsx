import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useCriiptoVerify, AuthMethodSelector } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';

function Login() {
  const [showHeading, setShowHeading] = useState(true);
  const { error } = useCriiptoVerify();

  const location = useLocation();
  const search = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );

  useEffect(() => {
    const handleResize = () => {
      setShowHeading(window.matchMedia('(max-width: 767px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

    if (search.get('finland') !== null) {
      acrValues.push('urn:grn:authn:fi:all');
    }

    return acrValues;
  }, [search]);

  return (
    <div className="flex flex-col justify-end md:flex-col-reverse h-full md:h-[90vh] bg-heroMobile bg-contain md:bg-hero bg-no-repeat bg-top md:bg-bottom items-center">
      <div className="flex flex-col mt-8 lg:mt-0 justify-center align-bottom content-center md:w-[463px] overflow-auto">
        <div className="overflow-auto">
          {showHeading && (
            <h3 className="font-medium text-lg mx-5 m-2 ml-4 pl-5 mt-60 leading-normal">
              Login to Cool Energy to see your consumption data
            </h3>
          )}
          {error && (
            <>
              <div className="bg-error rounded mt-4 mx-5 pb-[26px] pt-5 max-w-[460px] py-5">
                <div className="flex flex-row nowrap px-4">
                  <img
                    src="/alert.png"
                    alt="Error icon"
                    className="relative top-0 left-0 h-5 w-5 mr-2"
                  />
                  <h5 className="font-semibold">
                    There was an error logging in.
                  </h5>
                </div>
                <div className="font-medium mt-2 ml-11">
                  <>
                    <p>Please try again.</p>
                    {console.log(error.error_description)}
                  </>
                </div>
              </div>
            </>
          )}
          <AuthMethodSelector
            acrValues={acrValues.length ? acrValues : undefined}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
