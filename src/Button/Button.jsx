import React from "react";
import styles from "./Button.module.css";

function Button() {
  const sty = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <button className={styles.button}>Click Me!</button>
      {/*Module*/}
      <br />
      <button className={sty}>Click Me!</button>
      {/*Inline style*/}
    </div>
  );
}

export default Button;
