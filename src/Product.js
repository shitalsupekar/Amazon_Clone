import React from "react";
import "./Product.css"; // Make sure the path is correct
import { useStateValue } from "./StateProvider";





function Product({id,title, image, price}) {
  const[{basket},dispatch]=useStateValue();

  
   const addToBasket=()=>{
    //dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        
      },
    });
   };
  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
      
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <img className="productimg"
          src={image}
          alt=""
        />
        <button className="productbtn" onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
