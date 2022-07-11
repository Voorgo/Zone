import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemsContext } from "../../context/ProductsContext";

const CartProduct = ({ item, setRender }) => {
  const { dispatch } = ItemsContext();

  const increaseQuantity = (e) => {
    e.quantity += 1;
    setRender((prev) => !prev);
  };

  const decreaseQuantity = (e) => {
    setRender((prev) => !prev);
    e.quantity -= 1;
    if (e.quantity === 0) {
      dispatch({ type: "deleteItem", payload: item });
    }
  };

  return (
    <div className="bg-white text-black m-w[6rem] flex h-[10rem] rounded-lg p-1">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-[120px] object-cover"
      />

      <div className="h-max w-full flex flex-col pl-[2rem] justify-between xs:pl-[4rem] flex-wrap ">
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="font-bold text-lg ">${item.price}</p>
        <div className="flex gap-4 items-center pt-4">
          <button
            onClick={() => decreaseQuantity(item)}
            className="w-8 h-8 cursor-pointer bg-black rounded-md duration-100 flex items-center justify-center active:scale-95"
          >
            <FontAwesomeIcon icon={faMinus} color="white" />
          </button>
          <span className="font-semibold text-2xl">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item)}
            className="w-8 h-8 cursor-pointer bg-black rounded-md duration-100 flex items-center justify-center active:scale-95"
          >
            <FontAwesomeIcon icon={faPlus} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
