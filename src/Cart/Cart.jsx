import React from "react";
import "./Cart.css";
import { BsFillCartFill } from "react-icons/bs";

const Cart = ({ gun, handleAddToCart }) => {
  //   console.log(props.gun);
  const { name, img, bullet, capacity, action, price, id } = gun;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet Type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(id)}>
          <BsFillCartFill className="icon" />
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Cart;
