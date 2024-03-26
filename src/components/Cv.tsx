export default function Cv({
  children,
  fullName,
  email,
  phoneNumber,
  address,
}: {
  children: any;
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
      <section className="children"> {children}</section>
    </div>
  );
}
