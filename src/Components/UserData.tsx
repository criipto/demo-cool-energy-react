interface Props {
  claims: any;
}

function UserData(props: Props) {
  const { claims } = props;
  const { age, address, cprNumberIdentifier, country } = claims;

  const firstName = claims?.name.split(' ')[0];
  const lastName = claims?.name.split(' ')[1];

  return (
    <div className="bg-dashboardCardUser">
      <h1 className="font-semibold pb-3 text-2xl">Your data</h1>
      <ul className="user-data">
        <li>
          <span className="fixed-width">First Name</span>
          <span className="data-name">{firstName}</span>
        </li>
        <li>
          <span className="fixed-width">Last Name</span>
          <span className="data-name">{lastName}</span>
        </li>
        <li>
          <span className="fixed-width">Age</span>
          <span className="data-name">{age}</span>
        </li>
        <li>
          <span className="fixed-width">CPR</span>
          <span className="data-name">{cprNumberIdentifier}</span>
        </li>
        <li>
          <span className="fixed-width">Street</span>
          <span className="data-name">{address.street_address}</span>
        </li>
        <li>
          <span className="fixed-width">Town</span>
          <span className="data-name">{address.city}</span>
        </li>
        <li>
          <span className="fixed-width">Zip code</span>
          <span className="data-name">{address.postal_code}</span>
        </li>
        <li>
          <span className="fixed-width">Country</span>
          <span className="data-name">{country}</span>
        </li>
      </ul>
    </div>
  );
}

export default UserData;
