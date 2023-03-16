import Hero from './Hero';
import UserData from './UserData';
import Consumption from './Consumption';

interface Props {
  claims: any;
}

function Dashboard(props: Props) {
  const { claims } = props;
  const userName = claims?.name.split(' ')[0];

  return (
    <div>
      <h1 className="m-8 mt-12 mb-2 p-4 text-primary text-3xl font-semibold">
        Hi, {userName || 'user'}
      </h1>
      <div className="dashboard-items">
        {claims && <UserData claims={claims} />}
        <Consumption period="24h" />
        <Consumption period="7d" />
      </div>
      <Hero />
    </div>
  );
}

export default Dashboard;
