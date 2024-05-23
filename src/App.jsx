import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 0
  });
  const inputValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      };
    })
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputValid ? <Results input={userInput} /> : <p className="center">Please Enter Valid Input Data</p>}
    </>
  )
}

export default App
