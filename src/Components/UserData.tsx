interface Props {
  claims: any;
}

function UserData(props: Props) {
  const { claims } = props;
  const {
    age,
    address,
    cprNumberIdentifier,
    country,
    ssn,
    socialno,
    family_name,
    given_name,
    name,
  } = claims;

  return (
    <div className="bg-dashboardCardUser">
      <h1 className="font-semibold pb-3 text-2xl">Your data</h1>
      <ul className="user-data">
        {name && (
          <li>
            <span className="fixed-width">Name</span>
            <span className="data-name">{name}</span>
          </li>
        )}
        {given_name && (
          <li>
            <span className="fixed-width">First Name</span>
            <span className="data-name">{given_name}</span>
          </li>
        )}
        {family_name && (
          <li>
            <span className="fixed-width">Last Name</span>
            <span className="data-name">{family_name}</span>
          </li>
        )}
        {age && (
          <li>
            <span className="fixed-width">Age</span>
            <span className="data-name">{age}</span>
          </li>
        )}
        {ssn ? (
          <li>
            <span className="fixed-width">SSN</span>
            <span className="data-name">{ssn}</span>
          </li>
        ) : cprNumberIdentifier ? (
          <li>
            <span className="fixed-width">SSN</span>
            <span className="data-name">{cprNumberIdentifier}</span>
          </li>
        ) : socialno ? (
          <li>
            <span className="fixed-width">SSN</span>
            <span className="data-name">{socialno}</span>
          </li>
        ) : null}
        {address && (
          <>
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
          </>
        )}
        <li>
          <span className="fixed-width">Country</span>
          <span className="data-name">{country}</span>
        </li>
      </ul>
    </div>
  );
}

export default UserData;
