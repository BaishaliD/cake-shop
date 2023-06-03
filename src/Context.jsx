import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [cartState, setCartState] = useState(0);
  const updateCartState = (state) => {
    setCartState(state);
  };

  const { children } = props;
  return (
    <Context.Provider value={{ cartState, updateCartState }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
