import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";

const ProductContext = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    isOpen: false,
  });
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export function ItemsContext() {
  return useContext(ProductContext);
}

export default Provider;
