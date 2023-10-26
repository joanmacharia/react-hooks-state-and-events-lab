import React, {useState} from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)


  const itemClass = inCart ? "in-cart " : ""



  function handleCartItem() {
    setInCart(!inCart)
  }


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartItem}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
