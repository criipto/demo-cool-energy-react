import React from 'react';
import { QRCode } from '@criipto/verify-react';
import { useWalletMode } from '../Hooks/useWallet';

function Home() {
  const walletMode = useWalletMode();

  function shouldShowQr(): boolean {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.has('qr');
  }
  const showQr = shouldShowQr();

  const newsContent =
    'Lorem ipsum dolor sit amet consectetur. Nam aenean cursus placerat habitasse duis massa id sagittis curabitur. Dapibus sed auctor sed lectus erat nec quam.';

  const newsHeadings = ['News 1', 'News 2', 'News 3'];

  return (
    <>
      <div className="flex items-top justify-between mt-4 bg-contain bg-hero bg-center bg-no-repeat h-60 h-96">
          <h1 className="text-5xl font-medium mt-16 w-[868px] ml-10 leading-[60px]">
            Cool Energy named one of the world's most sustainable energy companies
          </h1>
          {showQr && walletMode && (
            <div className="qrBox">
              <QRCode margin={3} acrValues={['urn:authn:vc:danish_identity']}>
                {({ qrElement, isAcknowledged, isEnabled, isCancelled, retry, error }) => (
                  <React.Fragment>
                    <React.Fragment>
                      {isEnabled === false ? (
                        <React.Fragment>
                          <h2>An error occurred</h2>
                          <p>
                            QR codes are not enabled for this application. Please go to{' '}
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
      <div className="flex mb-4 justify-center align-center content-start">
        {newsHeadings.map((heading) => (
          <ul
            className="flex flex-row items-start justify-center align-center content-start h-[284px]"
            key={heading}
          >
            <li className="px-12 md:px-12 ml-4 mt-16 leading-normal flex-wrap flex-col mb-4">
              <h5 className="font-semibold text-2xl color-darkText pb-1 mb-3">
                {heading}
              </h5>
              <p className="font-normal text-base pb-8">{newsContent}</p>
              <div className="flex flex-row nowrap py-2 items-center content-center">
                <p className="text-primary text-sm font-medium pr-2">
                  Read more
                </p>
                <img
                  src="/read-more-icon.png"
                  alt=""
                  className="w-[17.48px] h-[14.98px] mt-0.5"
                />
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Home;
