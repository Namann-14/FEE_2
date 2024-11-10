import React, { useState } from "react";
import "./Product.css";

const Product = (props) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <figure className="product-card" onClick={updateCount}>
      <img src={props.img} alt={props.name} className="product-img" />
      <figcaption className="product-info">
        <h2 className="product-name">Product Name: {props.name}</h2>
        <h3 className="product-price">Price: ₹{props.price}</h3>
        <h4 className="product-click-count">Clicks: {count}</h4>
      </figcaption>
    </figure>
  );
};

export default Product;
