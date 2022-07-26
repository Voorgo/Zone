import { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { ItemsContext } from "../context/ProductsContext";

const ProductPage = ({ item }) => {
  const { dispatch } = ItemsContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center pb-4 pt-[120px] gap-10 px-4 xs:pt-[80px] md:h-[calc(100vh_-_194px)]">
      <div className="max-w-[76rem] w-full font-semibold text-xl">
        <Link to="/Zone/shop">{"< Go Back"}</Link>
      </div>
      <div className="flex items-center gap-4 grow flex-col-reverse md:flex-row">
        <div className="h-[15rem] w-[18rem] relative grow flex items-center justify-center group cursor-pointer overflow-hidden md:h-[20rem] ">
          <img
            src={item.image}
            alt={item.name}
            className="absolute max-w-[100%] h-full object-cover transiton-[transform] duration-100 group-hover:scale-125"
          />
        </div>
        <div className="flex flex-col gap-6 mt-6 sm:w-[20rem]">
          <h2 className="font-bold text-4xl">{item.name}</h2>
          <p className="font-semibold text-2xl">Price: ${item.price}</p>
          <button
            onClick={() => {
              dispatch({
                type: "addItem",
                payload: { ...item, quantity: 1, id: v4() },
              });
            }}
            className="w-full h-[3rem] text-lg font-semibold cursor-pointer black text-white bg-[length:200%] bg-right transition[background] duration-200 bg-addButton hover:bg-left"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
