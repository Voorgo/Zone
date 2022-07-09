import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div>
      <Link to={`/shop/${item.name}`} className="flex flex-col gap-4  ">
        <div className="h-[20rem] bg-[#f7f7f7] p-5 group flex items-center justify-center">
          <img
            src={item.image}
            className="max-h-full object-cover transition mx-auto group-hover:scale-110"
            alt={item.name}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl">{item.name}</p>
          <p className="font-semibold text-lg">${item.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
