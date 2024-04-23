import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./Button/Button";
import Student from "./student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <Button />
      <br />
      <Student name="Spongebob" age={16} isStudent={true}></Student>
      <Student name="Thanaphat" age={19} isStudent={false}></Student>
      <Student name="Wave" age={90} isStudent={true}></Student>
      <Student name="Wave2" age="30" isStudent="false"></Student>
      <Student name="Larry"></Student>
      <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App;
