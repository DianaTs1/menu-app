import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }

  const closeCartHandler = () => {
    setShowCart(false)
    console.log("s")
  }

  return (
    <CartProvider>
      <Header onOpenCart={showCartHandler}/>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
