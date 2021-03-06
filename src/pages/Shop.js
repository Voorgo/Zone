import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import SortBy from "../components/SortBy";
import { products } from "../products/products";

const Shop = () => {
  const [gender, setGender] = useState("men");
  const [word, setWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState();
  const changeCategory = (gen) => {
    setGender(gen);
  };

  const search = (e) => {
    setWord(e.target.value);
  };

  // eslint-disable-next-line
  const filteredProds = products.filter((product) => {
    if (product.gender === gender) {
      if (product.name.toLowerCase().includes(word.toLowerCase())) {
        return product;
      } else {
        // eslint-disable-next-line
        return;
      }
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <section>
        <div className="w-full border-b-2">
          <div className=" flex max-w-7xl pb-4 pt-4 gap-2 mx-auto flex-col justify-between text-2xl  items-center px-8 xs:flex-row">
            <div className="flex gap-5 ">
              <div
                className={`cursor-pointer px-4 py-1 font-bold leading-normal ${
                  gender === "men" ? "active__Category" : ""
                } ${gender !== "men" ? "hover__element" : ""}
               `}
                onClick={() => changeCategory("men")}
              >
                Men
              </div>
              <div
                className={`cursor-pointer px-4 py-1 font-bold leading-normal ${
                  gender === "women" ? "active__Category" : null
                } ${gender !== "women" ? "hover__element" : ""}
                 `}
                onClick={() => changeCategory("women")}
              >
                Women
              </div>
            </div>
            <div className="flex gap-3 flex-col-reverse md:flex-row">
              <SortBy index={setCurrentIndex} />
              <input
                type="text"
                aria-label="search product"
                placeholder={`Search in ${gender}`}
                className="border border-black px-2 py-1 text-base"
                onChange={search}
                value={word}
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl grid grid-cols-1 mt-[60px] mx-auto p-3 gap-10 xs:grid-cols-2 md:grid-cols-3 ">
          {currentIndex === undefined
            ? filteredProds.map((product) => (
                <ProductCard item={product} key={v4()} />
              ))
            : currentIndex === 1
            ? filteredProds
                .sort((a, b) => a.price - b.price)
                .map((product) => <ProductCard item={product} key={v4()} />)
            : filteredProds
                .sort((a, b) => b.price - a.price)
                .map((product) => <ProductCard item={product} key={v4()} />)}
        </div>
      </section>
    </Main>
  );
};

export default Shop;
