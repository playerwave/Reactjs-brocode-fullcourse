import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Render");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick1}>ClickMe1!</button>
      <input ref={inputRef1} />
      <br />
      <br />

      <button onClick={handleClick2}>ClickMe2!</button>
      <input ref={inputRef2} />
      <br />
      <br />

      <button onClick={handleClick3}>ClickMe3!</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default UseRef;
