import { useState } from "react";

function CarComponent() {
  const [car, setCar] = useState({
    year: 2016,
    brand: "Lamboghini",
    model: "Aventador",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleBrandChange(event) {
    setCar((c) => ({ ...c, brand: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your Favorite Car is: {car.year} {car.brand} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.brand} onChange={handleBrandChange} />{" "}
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />{" "}
      <br />
    </div>
  );
}

export default CarComponent;
