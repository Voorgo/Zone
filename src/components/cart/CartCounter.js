import { ItemsContext } from "../../context/ProductsContext";

const CartCounter = () => {
  const { state } = ItemsContext();
  const total = state.items.reduce((prev, curr) => prev + curr.quantity, 0);

  return (
    <span
      className={`absolute w-6 h-6 ${
        total === 0 ? "hidden" : "flex"
      } rounded-full text-base font-semibold bg-[#d494bc] bottom-0 left-0 translate-y-[20%] translate-x-[-40%] items-center justify-center`}
    >
      {total}
    </span>
  );
};

export default CartCounter;
