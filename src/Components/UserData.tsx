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
    mobilephone,
    phone_number,
    socialno,
    family_name,
    given_name,
    name,
    cvrNumberIdentifier,
    '2.5.4.10': companyName,
  } = claims;

  return (
    <div className="bg-dashboardCardUser">
      <h1 className="font-semibold pb-3 text-2xl">Your data</h1>
      <ul className="user-data">
        {cvrNumberIdentifier && companyName && name ? (
          <>
            <li>
              <span className="fixed-width">Company</span>
              <span className="data-name">{companyName}</span>
            </li>
            <li>
              <span className="fixed-width">CVR</span>
              <span className="data-name">{cvrNumberIdentifier}</span>
            </li>
            <li>
              <span className="fixed-width">Employee</span>
              <span className="data-name">{name}</span>
            </li>
          </>
        ) : given_name && family_name ? (
          <>
            <li>
              <span className="fixed-width">First Name</span>
              <span className="data-name">{given_name}</span>
            </li>
            <li>
              <span className="fixed-width">Last Name</span>
              <span className="data-name">{family_name}</span>
            </li>
          </>
        ) : name ? (
          <li>
            <span className="fixed-width">Name</span>
            <span className="data-name">{name}</span>
          </li>
        ) : null}
        {age && !cvrNumberIdentifier && (
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
        ) : cprNumberIdentifier && !cvrNumberIdentifier ? (
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
            {address.street_address && (
              <li>
                <span className="fixed-width">Street</span>
                <span className="data-name">{address.street_address}</span>
              </li>
            )}
            {address.city && (
              <li>
                <span className="fixed-width">City</span>
                <span className="data-name">
                  {address.city || address.locality}
                </span>
              </li>
            )}
            {address.postal_code && (
              <li>
                <span className="fixed-width">Zip code</span>
                <span className="data-name">{address.postal_code}</span>
              </li>
            )}
          </>
        )}
        {country && (
          <li>
            <span className="fixed-width">Country</span>
            {country === 'DK' && <span className="data-name">Denmark</span>}
            {country === 'SE' && <span className="data-name">Sweden</span>}
            {country === 'NO' && <span className="data-name">Norway</span>}
            {country === 'FI' && <span className="data-name">Finland</span>}
          </li>
        )}
        {(mobilephone ?? phone_number) && (
          <li>
            <span className="fixed-width">Phone number</span>
            <span className="data-name">{mobilephone ?? phone_number}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserData;
