import React, { useMemo } from 'react';
import useSearch from '../Hooks/useSearch';
import useIsMobile from '../Hooks/useIsMobile';

import {
  useCriiptoVerify,
  AuthMethodSelector,
  QRCode,
} from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';

function Login() {
  const { isMobile } = useIsMobile();
  const { error } = useCriiptoVerify();
  const search = useSearch();

  const acrValues = useMemo(() => {
    let acrValues: string[] = [];

    if (search.get('denmark') !== null) {
      acrValues.push('urn:grn:authn:dk:mitid:low');
    }

    if (search.get('sweden') !== null) {
      acrValues.push('urn:grn:authn:se:bankid:same-device');
      if (!isMobile) {
        acrValues.push('urn:grn:authn:se:bankid:another-device:qr');
      } else {
        acrValues = acrValues.filter(
          (value) => value !== 'urn:grn:authn:se:bankid:another-device:qr'
        );
      }
    }

    if (search.get('norway') !== null) {
      acrValues.push('urn:grn:authn:no:bankid:substantial');
    }

    if (search.get('finland') !== null) {
      acrValues.push('urn:grn:authn:fi:all');
    }

    return acrValues;
  }, [search, isMobile]);

  function shouldShowQr(): boolean {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.has('qr');
  }

  const showQr = shouldShowQr();

  // If only Sweden is selected, won't render a custom QR code
  const isOnlySwedenSelected =
    acrValues.includes('urn:grn:authn:se:bankid:same-device') &&
    acrValues.includes('urn:grn:authn:se:bankid:another-device:qr') &&
    acrValues.length === 2;

  return (
    <div className="flex flex-col justify-end md:flex-col-reverse h-full md:h-[90vh] bg-heroMobile bg-contain md:bg-hero bg-no-repeat bg-top md:bg-bottom items-center">
      <div className="flex flex-col mt-8 lg:mt-0 justify-center align-bottom content-center md:w-[463px] overflow-auto">
        <div className="overflow-auto">
          {isMobile && (
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
          {!isMobile && showQr && !isOnlySwedenSelected && (
            <div className="qrBox">
              <QRCode margin={3}>
                {({
                  qrElement,
                  isAcknowledged,
                  isEnabled,
                  isCancelled,
                  retry,
                  error,
                }) => (
                  <React.Fragment>
                    <React.Fragment>
                      {isEnabled === false ? (
                        <React.Fragment>
                          <h2>An error occurred</h2>
                          <p>
                            QR codes are not enabled for this application.
                            Please go to{' '}
                            <a
                              href="https://dashboard.criipto.com"
                              target="_blank"
                              rel="noreferrer"
                              className="text-primary hover:text-darkText underline"
                            >
                              your Criipto dashboard
                            </a>{' '}
                            to activate QR codes.
                          </p>
                        </React.Fragment>
                      ) : error ? (
                        <React.Fragment>
                          <h2>An error occurred</h2>
                          <p>
                            {error.message ?? error}
                            <br />
                            <button onClick={retry}>Try again.</button>
                            <br />
                          </p>
                        </React.Fragment>
                      ) : isCancelled ? (
                        <React.Fragment>
                          <h2>Login cancelled</h2>
                          <p>
                            <button
                              onClick={retry}
                              className="text-primary hover:text-darkText underline"
                            >
                              Try again.
                            </button>
                            <br />
                          </p>
                        </React.Fragment>
                      ) : isAcknowledged ? (
                        <React.Fragment>
                          <h2>Pending</h2>
                          <p>Complete the login process on your phone</p>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <h2>Login with the QR code</h2>
                          <p>using the camera app on your phone</p>
                          <div className="flex items-center justify-center">
                            <div className="w-64">{qrElement}</div>
                          </div>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  </React.Fragment>
                )}
              </QRCode>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
