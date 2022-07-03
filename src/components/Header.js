import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white w-full border-b border-[rgb(219, 219, 219)] fixed z-20">
        <div className="container flex flex-col max-w-7xl pb-4 pt-4 gap-2 mx-auto justify-between text-2xl h-max items-center px-8 xs:flex-row xs:h-[60px] xs:pb-0 xs:pt-0">
          <div>
            <NavLink to="/">
              <h1 className="text-4xl font-cinzel">Zone</h1>
            </NavLink>
          </div>
          <div>
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
                  to="/products"
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
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
