import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Provider from "./context/ProductsContext";
import Cart from "./components/cart/Cart";
import Shop from "./pages/Shop";

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
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
