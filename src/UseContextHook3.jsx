import UseContextHook4 from "./UseContextHook4";
import { UserContext } from "./UseContextHook1";
import { useContext } from "react";

function UseContextHook3(props) {
  const userName = useContext(UserContext);

  return (
    <div className="box">
      <h1>UseContextHook3</h1>
      <h2>{`Hello again ${userName}`}</h2>
      <UseContextHook4 user={props.user} />
    </div>
  );
}

export default UseContextHook3;
