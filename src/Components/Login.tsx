import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCriiptoVerify, AuthMethodSelector } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';

function Login() {
  const { error } = useCriiptoVerify();
  const navigate = useNavigate();
  const redirectToLogin = () => navigate('/login');

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
    <div className="flex flex-col justify-end md:flex-col-reverse h-full md:h-[90vh] bg-heroMobile bg-contain md:bg-hero bg-no-repeat bg-top md:bg-bottom">
      <div className="flex flex-wrap flex-col mt-8 lg:mt-0 justify-center align-bottom content-center">
        <h1 className="font-semibold text-xl px-1 m-2 ml-4 mt-6 lg:m-0 lg:mt-8 leading-normal">
          Login to Cool Energy to see your consumption data
        </h1>
        <>
          {error
            ? () => {
                console.log(error, error.error_description);
                <p>There was an error with that action. Please try again.</p>;
                redirectToLogin();
              }
            : null}
          <AuthMethodSelector
            acrValues={acrValues.length ? acrValues : undefined}
          />
        </>
      </div>
    </div>
  );
}

export default Login;
