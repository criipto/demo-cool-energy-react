import { useCriiptoVerify } from '@criipto/verify-react';

function Home() {
  const { claims } = useCriiptoVerify();

  const newsContent =
    'Lorem ipsum dolor sit amet consectetur. Nam aenean cursus placerat habitasse duis massa id sagittis curabitur. Dapibus sed auctor sed lectus erat nec quam.';

  const newsHeadings = ['News 1', 'News 2', 'News 3'];

  return (
    <>
      <div className="flex items-top justify-start mt-4 bg-contain bg-hero bg-center bg-no-repeat h-60 h-96">
        <h1 className="text-5xl font-medium mt-16 w-[868px] ml-10 leading-[60px]">
          Cool Energy named one of the world's most sustainable energy companies
        </h1>
      </div>

      {!claims && (
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
      )}
    </>
  );
}

export default Home;
