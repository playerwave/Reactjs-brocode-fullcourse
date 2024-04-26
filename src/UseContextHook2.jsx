import UseContextHook3 from "./UseContextHook3";

function UseContextHook2(props) {
  return (
    <div className="box">
      <h1>UseContextHook2</h1>
      <h2>{`This user is ${props.user}`}</h2>
      <UseContextHook3 user={props.user} />
    </div>
  );
}

export default UseContextHook2;
