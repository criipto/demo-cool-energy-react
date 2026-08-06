import React from 'react';
import { QRCode } from '@criipto/verify-react';

interface Props {
  acrValues?: string[];
  margin?: number;
}

function QR(props: Props) {
  return (
    <div className="qrBox">
      <QRCode margin={props.margin} acrValues={props.acrValues}>
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
                    <button onClick={retry} className="text-primary hover:text-darkText underline">
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
  );
}

export default QR;
