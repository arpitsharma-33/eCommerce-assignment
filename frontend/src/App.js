import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Addproduct from "./pages/Addproduct";
import Navbar from "./components/common/Navbar"
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-details/:name" element={<ProductDetails />} />
        <Route path="/addproduct" element={<Addproduct />} />
      </Routes>
    </>
  );
}

export default App;
