import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

const MoleContainer = (props) => {
  let [theMole, setTheMole] = useState(false); // the mole is set to false in the start

  const handleClick = (e) => {
    props.setScore(props.score + 1); //if u click on the mole the score + 1
    setTheMole(false); //and the mole dissapears setting mole to false
  };

  let displayMole = theMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setTheMole}
      handleClick={handleClick}
    />
  ) : (
    <EmptySlot toggle={setTheMole} />
  );

  return (
    <div style={{ display: "inline-block", width: "30vw" }}>{displayMole}</div>
  );
};

export default MoleContainer;
