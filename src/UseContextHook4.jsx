import React, { useContext } from "react";
import { UserContext } from "./UseContextHook1";
//Consumer Component มีได้มากกว่า 1
function UseContextHook4(props) {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>UseContextHook4</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default UseContextHook4;
