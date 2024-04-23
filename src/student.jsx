/* eslint-disable react/prop-types */
import propType from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is he student? {props.isStudent ? "Yes he is" : "No he's not"}</p>
    </div>
  );
}

Student.propType = {
  name: propType.string,
  age: propType.number,
  isStudent: propType.boolean,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;
