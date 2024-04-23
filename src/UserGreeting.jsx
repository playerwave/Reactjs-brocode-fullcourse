import React from "react";
import propType from "prop-types";

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username} </h2>
  );
  const loginPropmt = <h2 className="login-prompt">You are not Login!!!</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPropmt;
}

UserGreeting.propType = {
  username: propType.string,
  isLoggedIn: propType.boolean,
};

UserGreeting.defaultProps = {
  username: "Unknown",
};

export default UserGreeting;
