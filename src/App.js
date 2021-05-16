import React, { useState } from 'react';

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"

function App() {

  // UseState fro Cart
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideChartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart onHideCart={hideChartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
