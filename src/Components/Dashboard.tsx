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
      <h1 className="greeting text-primary text-4xl leading-44px font-medium py-32px mx-4 md:mx-40px md:py-64px">
        Hi, {userName || 'user'}
      </h1>
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
