import React, { useState, createContext } from "react";
import UseContextHook2 from "./UseContextHook2";
//Provider Component
export const UserContext = createContext();

function UseContextHook1() {
  const [user, setUser] = useState("Player0ne");

  return (
    <div className="box">
      <h1>UseContextHook1</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <UseContextHook2 user={user} />
      </UserContext.Provider>
    </div>
  );
}

export default UseContextHook1;
