import "./App.css";
import Inputs from "./components/Inputs";
import { useState } from "react";
import Cv from "./components/Cv";

function App() {
  const [fullName, setFullName] = useState<string>("John Doe");
  const [email, setEmail] = useState<string>("my-email@email.com");
  const [phoneNumber, setPhoneNumber] = useState<string>("(123)123-456-789");
  const [address, setAddress] = useState<string>(
    "123 My Address Lane, City, State, Zip Code"
  );

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
  return (
    <>
      <Inputs
        onNameChange={handleNameChange}
        onMailChange={handleMailChange}
        onAddressChange={handleAddressChange}
        onPhoneChange={handlePhoneChange}
      />

      <Cv
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
    </>
  );
}

export default App;
