function Btn() {
  let count = 0;

  const handleClick = (e) => {
    e.target.textContent = "OUCH! T-T";
  };

  return <button onClick={(e) => handleClick(e)}>Click Me</button>;
}

export default Btn;
