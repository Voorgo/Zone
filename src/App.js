import { Route, Routes, Navigate } from "react-router-dom";
import { v4 } from "uuid";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Provider from "./context/ProductsContext";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import { products } from "./products/products";

function App() {
  return (
    <>
      <Provider>
        <Header />
        <Cart />
        <Routes>
          <Route path="/Zone" element={<Home />} />
          <Route path="/Zone/about" element={<About />} />
          <Route path="/" element={<Navigate to="/Fake-Store" replace />} />
          <Route path="/Zone/shop" element={<Shop />} />
          {products.map((product) => (
            <Route
              key={v4()}
              path={`/Zone/shop/${product.name.replace(/\s/g, "-")}`}
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
