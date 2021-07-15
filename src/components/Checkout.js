import React from "react";
import "../css/Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue(); //destructuring

  return (
    <div className="checkout">
      <div className="checkout__productLeft">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/beginners-guide-to-advertising-on-amazon-self-serve-ads.png?f3SD7ecQrPll05RgyCiBDBXycVk69htb&itok=4uzEUbji"
        />

        {basket?.length === 0 ? (
          <div className="checkout__title">Your shopping basket is empty</div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping basket</h2>
            {console.log(basket)}
            {basket.map((item) => (
              // console.log(item.id);
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__productRight">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
