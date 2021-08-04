import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, image, rating }) {
  const [, dispatch] = useStateValue(); //destructuring

  var removeFromBakset = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  console.log(id, price, title, image, rating);
  return (
    <div className="checkout__product">
      <img src={image} alt="" />
      <div className="checkout__star">
        <div className="checkout__productInfo">
          <p className="checkout__produuctPrice">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="checkout_productRating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>🌟 </p>
              ))}
          </div>

          <button onClick={removeFromBakset}>Remove from basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
