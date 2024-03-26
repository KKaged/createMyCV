import InfoInputs from "./InfoInput";

export default function Experience({
  onExpDateChange,
  onExpLocChange,
  onExpTitleChange,
  onExpPositionChange,
  onExpDescChange,
  handleAddExperience,
}: {
  onExpDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpLocChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpPositionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpDescChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddExperience: () => void;
}): JSX.Element {
  return (
    <div className="custom-inputs">
      <h2>Job Experience</h2>
      <InfoInputs labelFor="Start Date - End Date" onChange={onExpDateChange} />
      <InfoInputs labelFor="Location" onChange={onExpLocChange} />
      <InfoInputs labelFor="Title" onChange={onExpTitleChange} />
      <InfoInputs labelFor="Position" onChange={onExpPositionChange} />
      <InfoInputs labelFor="Description" onChange={onExpDescChange} />
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
}
