import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Wave");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployed] = useState(false);

  const updateName = () => {
    setName("Thanaphat");
  };

  const incrementAge = () => {
    setAge(age + 10);
  };

  const updateEmploy = () => {
    setEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Update Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>add Age</button>

      <p>is Employed?: {isEmployed ? "Yes Employed" : "No not Employ"}</p>
      <button onClick={updateEmploy}>Toggle Employed</button>
    </div>
  );
}

export default MyComponent;
