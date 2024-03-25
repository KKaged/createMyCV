export default function Cv({
  fullName,
  email,
  phoneNumber,
  address,
}: {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}) {
  return (
    <div className="cv">
      <header className="header">
        <h1>{fullName}</h1>
        <div className="mini-header">
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <p>{address}</p>
        </div>
      </header>
    </div>
  );
}
