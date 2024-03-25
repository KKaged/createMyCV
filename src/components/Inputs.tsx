import InfoInputs from "./InfoInput";

export default function Inputs({
  onNameChange,
  onMailChange,
  onPhoneChange,
  onAddressChange,
}: {
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="custom-inputs">
      <h2>Personal Details</h2>
      <InfoInputs labelFor="Full Name" onChange={onNameChange} />
      <InfoInputs labelFor="Email" onChange={onMailChange} />
      <InfoInputs labelFor="Phone Number" onChange={onPhoneChange} />
      <InfoInputs labelFor="Address" onChange={onAddressChange} />
      <button>Submit</button>
    </div>
  );
}
