import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Cart/Cart";
import Navbar from "./Navbar/Navbar";

function App() {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {guns.map((gun) => (
          <Cart key={gun.id} gun={gun} />
        ))}
      </div>
    </div>
  );
}

export default App;
