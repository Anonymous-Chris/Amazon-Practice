import React from "react";
import "../css/Products.css";
function Products({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟 </p>
            ))}
        </div>
      </div>

      <img src={image} alt=""></img>
      <button className="product_button">Add to basket</button>
    </div>
  );
}

export default Products;
