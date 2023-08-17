import "./App.css";
import { useState } from "react";
import MoleContainer from "./components/MoleContainer";

function App() {
  let [score, setScore] = useState(0); //score is now equal to 0 at the start

  const createMoleHill = () => {
    //creating each of the 9 mole hills to render on page
    let hills = []; //start with an empty array
    for (let i = 0; i < 9; i++) {
      //loops through 9 times for 9 hills total
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />); //add a moleContainer to each of the hill
    }
    return <div>{hills}</div>;
  };
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
