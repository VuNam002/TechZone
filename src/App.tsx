import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import ProductDetail from "./page/ProductDetail";
import NotFound from "./page/home/NotFound";
import Cart from "./page/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
      <Route path="cart" element={<Cart />} />

    </Routes>
  );
}

export default App;
