import "./App.css";
import Inputs from "./components/Inputs";
import { useState } from "react";
import Cv from "./components/Cv";
import Clear from "./components/Clear";

function App() {
  const [fullName, setFullName] = useState<string>("John Doe");
  const [email, setEmail] = useState<string>("john-doe63@email.com");
  const [phoneNumber, setPhoneNumber] = useState<string>("(123)123-456-789");
  const [address, setAddress] = useState<string>("London, UK");

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

  const handleClearClick = () => {
    setFullName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
  };

  const handleLoadClick = () => {
    setFullName("John Doe");
    setEmail("john-doe63@email.com");
    setAddress("London, UK");
    setPhoneNumber("(123)123-456-789");
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
      </div>
      <div className="right">
        <Cv
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
      </div>
    </>
  );
}

export default App;
