import Hero from './Hero';
import UserData from './UserData';
import Consumption from './Consumption';

interface Props {
  claims: any;
}

function Dashboard(props: Props) {
  const { claims } = props;
  const { cvrNumberIdentifier, '2.5.4.10': companyName } = claims;
  const userName = claims?.name.split(' ')[0];

  return (
    <div>
      {cvrNumberIdentifier && companyName ? (
        <h1 className="greeting text-primary text-4xl leading-11 font-medium py-8 mx-4 md:mx-10 md:py-16 lg:py-24">
          Consumption data for {companyName}
        </h1>
      ) : (
        <h1 className="greeting text-primary text-4xl leading-11 font-medium py-8 mx-4 md:mx-10 md:py-16 lg:py-24">
          Hi, {userName || 'user'}
        </h1>
      )}
      <div className="dashboard-items">
        {claims && <UserData claims={claims} />}
        <Consumption period="24 h" />
        <Consumption period="7 d" />
      </div>
      <Hero />
    </div>
  );
}

export default Dashboard;
