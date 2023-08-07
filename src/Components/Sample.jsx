import React, { useState } from "react";

const Sample = () => {
  const [thingsArray, setThingsArray] = useState(["thing1 ", "thing2 ", "thing3 "]);

  const thingsElements = thingsArray.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  const addItem = () => {
    const newThingText = `thing ${thingsArray.length + 1}`;
    setThingsArray(prevArray => [...prevArray, newThingText]);
    console.log(thingsArray);
  };

  return (
    <div>
      <button onClick={addItem}>click me</button>
      {thingsElements}
    </div>
  );
};

export default Sample;
