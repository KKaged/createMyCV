import InfoInputs from "./InfoInput";
import { useState } from "react";

export default function Education({
  onDateChange,
  onLocationChange,
  onDegreeChange,
  onStudyChange,
  onAddEducation,
}: {
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDegreeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStudyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddEducation: () => void;
}) {
  const [isHide, hide] = useState(false);

  return (
    <div className="custom-inputs">
      <div className="topic">
        <h2>Education</h2>
        <button onClick={() => hide(!isHide)}>+</button>
      </div>
      {isHide && (
        <>
          <InfoInputs labelFor="School" onChange={onLocationChange} />
          <InfoInputs
            labelFor="Start Date - End Date"
            onChange={onDateChange}
          />
          <InfoInputs labelFor="Degree" onChange={onDegreeChange} />
          <InfoInputs labelFor="Field of Study" onChange={onStudyChange} />
          <button onClick={onAddEducation}>Add Education</button>
        </>
      )}
    </div>
  );
}
