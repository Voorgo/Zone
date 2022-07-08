import { useContext, useState, useEffect } from "react";

const Cart = () => {
  return (
    <>
      <div className="fixed bg-[#334040] opacity-60 w-full h-full top-0 left-0 z-50 hidden"></div>
      <div className="w-[28rem] h-full fixed p-[3rem] flex flex-col items-center gap-[2rem] top-0 right-[-28rem] bg-black text-white z-50 transition-[right] duration-200 ease-in overflow-y-scroll no-scrollBar">
        <h2 className="text-4xl font-semibold">My cart</h2>
        <div className="w-full flex flex-col text-white gap-8 empty:before:content-['Empty_Cart'] empty:before:block empty:before:text-center"></div>
        <button className="w-[70%] h-[40px] text-xl text-black font-bold cursor-pointer bg-checkoutBtn bg-right bg-[length:200%] button__transition hover:bg-left hover:text-white  ">
          Checkout
        </button>
        <button className="w-[70%] h-[40px] text-xl text-black font-bold cursor-pointer bg-closeBtn bg-right bg-[length:200%] button__transition hover:bg-left hover:text-white  ">
          Close
        </button>
      </div>
    </>
  );
};

export default Cart;
