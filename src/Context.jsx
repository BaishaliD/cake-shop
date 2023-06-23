import { createContext, useEffect, useState } from "react";
import { getCartData } from "../firebase";

const Context = createContext();

function ContextProvider(props) {
  const [cartState, setCartState] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartSummary, setCartSummary] = useState();

  useEffect(() => {
    getCartData().then((res) => {
      console.log("cart data in context ", res);
      setCartCount(res ? res.length : 0);
    });
  }, []);

  const updateCartState = (state) => {
    setCartState(state);
  };

  const { children } = props;
  return (
    <Context.Provider
      value={{
        cartState,
        updateCartState,
        cartCount,
        setCartCount,
        cartSummary,
        setCartSummary,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
