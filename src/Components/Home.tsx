import { useCriiptoVerify, AuthMethodSelector } from '@criipto/verify-react';
import '@criipto/verify-react/dist/criipto-verify-react.css';
import Hero from '../Components/Hero';

function Home() {
  const { claims } = useCriiptoVerify();
  return (
    <>
      <Hero />
      {!claims && (
        <div className="flex flex-wrap flex-col mb-4 justify-center align-center content-center">
          <h1 className="font-semibold text-xl px-12 md:px-12 m-2 ml-4 mt-16 leading-normal">
            Login to Cool Energy to see your consumption data
          </h1>
          <div className="Auth-container">
            <AuthMethodSelector />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
