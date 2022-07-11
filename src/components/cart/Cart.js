import { useState } from "react";
import { ItemsContext } from "../../context/ProductsContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { state, dispatch } = ItemsContext();
  const [, setRender] = useState(false);
  const total = state.items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const closeCart = () => {
    return dispatch({ type: "close" });
  };

  return (
    <>
      <div
        className={`fixed bg-[#334040] opacity-60 w-full h-full top-0 left-0 z-50 ${
          state.isOpen ? "block" : "hidden"
        }`}
        onClick={closeCart}
      ></div>
      <div
        className={`w-full h-full fixed p-[1rem] transition-[right] duration-300 flex flex-col items-center gap-[2rem] top-0 ${
          state.isOpen ? "right-0" : "right-[-100%]"
        }
       bg-black text-white z-50  overflow-y-scroll no-scrollBar xs:${
         state.isOpen ? "right-0" : "right-[-28rem]"
       } xs:w-[28rem] xs:p[3rem] `}
      >
        <h2 className="text-4xl font-semibold">My cart</h2>
        <div className="w-full flex flex-col text-white gap-8 empty:before:content-['Empty_Cart'] empty:before:block empty:before:text-center">
          {state.items.map((item) => {
            return (
              <CartProduct item={item} key={item.id} setRender={setRender} />
            );
          })}
        </div>
        <div className={`${total < 1 ? "hidden" : "block"}`}>
          Total: ${total.toFixed(2)}
        </div>
        <button className="w-[70%] h-[40px] text-xl text-black font-bold cursor-pointer bg-checkoutBtn bg-right bg-[length:200%] button__transition hover:bg-left hover:text-white">
          Checkout
        </button>
        <button
          className="w-[70%] h-[40px] text-xl text-black font-bold cursor-pointer bg-closeBtn bg-right bg-[length:200%] button__transition hover:bg-left hover:text-white"
          onClick={closeCart}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Cart;
