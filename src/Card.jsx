import React from "react";

function Card() {
  return (
    <div className="card">
      <img
        src="https://th.bing.com/th/id/R.31a3ce45a0b24e972bb40932dc48d75a?rik=Cl7XoL%2fKZob9Zw&pid=ImgRaw&r=0"
        alt="Profile Picture"
        width={150}
        height={200}
        className="card-image"
      />
      <h2 className="card-title">Mark Zuckerberg (CEO of Meta)</h2>
      <p>i create facebook and thread </p>
    </div>
  );
}

export default Card;
