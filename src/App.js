import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Cart/Cart";
import Navbar from "./Navbar/Navbar";
import Modal from "react-modal";
import { CgCloseR } from "react-icons/cg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  // console.log(cart);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <Navbar
        key={Math.random(cart.id) * 10000}
        cart={cart}
        openModal={openModal}
      />

      <div className="card-container">
        {guns.map((gun) => (
          <Cart key={gun.id} gun={gun} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className="modal-close-button" onClick={closeModal}>
          <CgCloseR size={25} />
        </button>
        {cart.length === 0 && (
          <div className="cart-warning">
            <p> Cart is empty </p>
          </div>
        )}
        {cart.map((item) => (
          // <h1>Name: {item.name}</h1>
          <ul key={Math.random(item.id) * 10000}>
            <li>{item.name}</li>
          </ul>
        ))}
      </Modal>
    </div>
  );
}

export default App;
