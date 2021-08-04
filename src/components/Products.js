import React from "react";
import "../css/Products.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue(); //destructuring

  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { title, image, id, price, rating },
    });
  };
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
      <button className="product_button" onClick={addtoBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Products;
