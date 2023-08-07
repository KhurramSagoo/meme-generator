import React, { useState } from "react";
import starEmpty from '../img/star.svg';
import starFilled from '../img/star-fill.svg';


const NewThing = () => {
  const [thingsArray, setThingsArray] = useState(["things1", "things2"]);
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  function addMore() {
    setThingsArray((prevState) => {
      return [...prevState, `things${prevState.length + 1}`];
    });
  }
  return (
    <>
      <button onClick={addMore}>create more things</button>
      <p>{thingsElements}</p>
    </>
  );
};

export default NewThing;
