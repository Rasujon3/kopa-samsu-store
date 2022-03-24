import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Cart/Cart";
import Navbar from "./Navbar/Navbar";

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  return (
    <div>
      <Navbar />
      <div>
        {cart.map((item) => (
          <h1 key={Math.random(item.id) * 10000}>{item.name}</h1>
        ))}
      </div>
      <div className="card-container">
        {guns.map((gun) => (
          <Cart key={gun.id} gun={gun} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
