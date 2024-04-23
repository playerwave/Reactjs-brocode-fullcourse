import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemlist = props.items;

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
  //   fruits.sort((a, b) => a.calories - b.calories); //น้อยไปมาก
  //   fruits.sort((a, b) => b.calories - a.calories); //มากไปน้อย

  //   const lowCalFruits = fruits.filter((fruits) => fruits.calories < 100);
  //   const highCalFruits = fruits.filter((fruits) => fruits.calories > 100);

  const arr_itemlist = itemlist.map((item) => (
    <li key={item.id}>
      {item.name} with {item.calories} calories.
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-item">{arr_itemlist}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  utems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Fruits",
  items: [],
};

export default List;
