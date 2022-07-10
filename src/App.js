import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Provider from "./context/ProductsContext";
import Cart from "./components/cart/Cart";
import Shop from "./pages/Shop";
import { products } from "./products/products";
import ProductPage from "./pages/ProductPage";
import { v4 } from "uuid";

function App() {
  return (
    <>
      <Provider>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          {products.map((product) => (
            <Route
              key={v4()}
              path={`/shop/${product.name.replace(/\s/g, "-")}`}
              element={<ProductPage item={product} />}
            />
          ))}
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
