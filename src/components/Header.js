import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ItemsContext } from "../context/ProductsContext";
import CartCounter from "./cart/CartCounter";

const Header = () => {
  const { dispatch } = ItemsContext();
  const openCart = () => {
    return dispatch({ type: "open" });
  };

  return (
    <header>
      <nav className="bg-white w-full fixed z-50 h-[110px] xs:h-max ">
        <div className="container flex flex-col max-w-7xl pb-4 pt-4 gap-2 mx-auto justify-between text-2xl h-max items-center px-8 xs:flex-row xs:h-[60px] xs:pb-0 xs:pt-0">
          <div>
            <NavLink to="/">
              <h1 className="text-2xl font-cinzel xs:text-4xl">Zone</h1>
            </NavLink>
          </div>
          <div className="text-lg xs:text-xl">
            <ul className="flex items-center justify-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className="relative after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:scale-x-0 after:bg-black after:transition-transform after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="relative after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:scale-x-0 after:bg-black after:transition-transform after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="relative after:content-[''] after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:scale-x-0 after:bg-black after:transition-transform after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  About
                </NavLink>
              </li>
              <li
                className="bg-black rounded-full p-3 w-[41px] h-[41px] flex items-center justify-center cursor-pointer transition-transform relative hover:scale-110"
                onClick={openCart}
              >
                <CartCounter />
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="xs"
                  color="white"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
