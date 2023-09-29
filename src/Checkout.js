import React from "react";
import "./Checkout.css";
import jttjow7tImage from "./jttjow7t.png"; // Import the image
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={jttjow7tImage} // Use the imported image variable as the source
          alt=""
        />
      
      <div>
        <h3>Hello,{user?.email}</h3>
        <h2 className="checkout__title">MY products</h2>
        {
          basket.map(item=>(
            <CheckoutProduct
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             />
          ))
        }
      </div>
      </div>

      <div className="checkou__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;

