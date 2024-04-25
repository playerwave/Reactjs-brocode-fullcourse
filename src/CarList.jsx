import { useState } from "react";

function CarList() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      brand: carBrand,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarBrand("");
    setCarModel("");
  }

  function handleDelCar(index) {
    setCars(cars.filter((element, i) => i != index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  function handleBrandChange(event) {
    setCarBrand(event.target.value);
  }

  return (
    <div>
      <h2>List Of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleDelCar(index)}>
            {" "}
            {car.year} {car.brand} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <input type="text" value={carBrand} onChange={handleBrandChange} />
      <input type="text" value={carModel} onChange={handleModelChange} />

      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default CarList;
