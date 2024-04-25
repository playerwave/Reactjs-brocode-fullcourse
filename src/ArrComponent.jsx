import { useState } from "react";

function ArrComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newfood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((foods) => [...foods, newfood]);
  }

  function handleDelFood(index) {
    setFoods(foods.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h2>List Of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleDelFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default ArrComponent;
