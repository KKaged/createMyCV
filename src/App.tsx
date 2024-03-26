import "./App.css";
import Inputs from "./components/Inputs";
import { useState } from "react";
import Cv from "./components/Cv";
import Clear from "./components/Clear";
import Section from "./components/Section";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [fullName, setFullName] = useState<string>("John Doe");
  const [email, setEmail] = useState<string>("john.doe@example.com");
  const [phoneNumber, setPhoneNumber] = useState<string>("(123) 456-7890");
  const [address, setAddress] = useState<string>("London, UK");

  const [startDate, setStartDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [study, setStudy] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const [educations, setEducations] = useState<any[]>([
    {
      startDate: "2018 - 2022",
      location: "University of London",
      degree: "Bachelor's in Computer Science",
      study: "Computer Science",
    },
  ]);

  const [experience, setExperience] = useState<any[]>([
    {
      startDate: "2022 - Present",
      location: "Tech Company X",
      degree: "Software Engineer",
      study: "Full-stack development",
      desc: "Developed web applications using React and Node.js.",
    },
  ]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  const handleDegreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(e.target.value);
  };
  const handleStudyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudy(e.target.value);
  };
  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const handleClearClick = () => {
    setFullName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
    setStartDate("");
    setLocation("");
    setDegree("");
    setStudy("");
    setDesc("");
    setEducations([]);
    setExperience([]);
  };

  const handleLoadClick = () => {
    setFullName("John Doe");
    setEmail("john.doe@example.com");
    setAddress("London, UK");
    setPhoneNumber("(123) 456-7890");
    setEducations([
      {
        startDate: "2018 - 2022",
        location: "University of London",
        degree: "Bachelor's in Computer Science",
        study: "Computer Science",
      },
    ]);
    setExperience([
      {
        startDate: "2022 - Present",
        location: "Tech Company X",
        degree: "Software Engineer",
        study: "Full-stack development",
        desc: "Developed web applications using React and Node.js.",
      },
    ]);
  };

  const handleAddEducation = () => {
    // Create a new education object with current values
    const newEducation = {
      startDate,
      location,
      degree,
      study,
    };

    // Add the new education object to the educations array
    setEducations([...educations, newEducation]);

    // Clear the input fields after adding education
    setStartDate("");
    setLocation("");
    setDegree("");
    setStudy("");
  };

  const handleAddExperience = () => {
    // Create a new experience object with current values
    const newExperience = {
      startDate,
      location,
      degree,
      study,
      desc,
    };

    // Add the new experience object to the experiences array
    setExperience([...experience, newExperience]);

    // Clear the input fields after adding experience
    setStartDate("");
    setLocation("");
    setDegree("");
    setStudy("");
    setDesc("");
  };

  return (
    <>
      <div className="left">
        <Clear onClearClick={handleClearClick} onClickLoad={handleLoadClick} />
        <Inputs
          onNameChange={handleNameChange}
          onMailChange={handleMailChange}
          onAddressChange={handleAddressChange}
          onPhoneChange={handlePhoneChange}
        />
        <Education
          onAddEducation={handleAddEducation} // Pass the handler to add education
          onDateChange={handleDateChange}
          onLocationChange={handleLocationChange}
          onDegreeChange={handleDegreeChange}
          onStudyChange={handleStudyChange}
        />
        <Experience
          handleAddExperience={handleAddExperience}
          onExpDateChange={handleDateChange}
          onExpLocChange={handleLocationChange}
          onExpTitleChange={handleDegreeChange}
          onExpPositionChange={handleStudyChange}
          onExpDescChange={handleDescChange}
        />
      </div>
      <div className="right">
        <Cv
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        >
          {/* Map over the educations array to render each education */}
          <h2 className="exp-header">Education</h2>
          {educations.map((education, index) => (
            <Section
              key={index}
              leftContent={
                <>
                  <p>{education.startDate}</p>
                  <p>{education.location}</p>
                </>
              }
              rightContent={
                <>
                  <p>{education.degree}</p>
                  <p>{education.study}</p>
                </>
              }
            />
          ))}
          <h2 className="exp-header">Job Experience</h2>
          {experience.map((exp, index) => (
            <Section
              key={index}
              leftContent={
                <>
                  <p>{exp.startDate}</p>
                  <p>{exp.location}</p>
                </>
              }
              rightContent={
                <>
                  <p>{exp.degree}</p>
                  <p>{exp.study}</p>
                  <p>{exp.desc}</p>
                </>
              }
            />
          ))}
        </Cv>
      </div>
    </>
  );
}

export default App;
