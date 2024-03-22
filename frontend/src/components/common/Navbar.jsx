import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import CartPage from "../../pages/CartPage"; // Import the CartPage component here
import { useState } from "react";
import { useCartContext } from "../../context/Cart";
import Logo from "../../assets/ecomm-high-resolution-logo-white.png"

const Navbar = () => {
  // const cartItems = useSelector((state) => state.cart.cart);
  const { cart } = useCartContext();
  useEffect(() => {
    console.log("inside cart", cart);
  }, [cart]);
  const [uniqueItemsCount, setuniqueItemsCount] = useState(cart.length);
  useEffect(() => {
    setuniqueItemsCount(cart.length);
  }, [cart]);

  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="shadow-lg backdrop-blur-lg py-5 text-white bg-black relative">
        <nav className="flex px-[5%] items-center container mx-auto justify-between">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo" className="h-20 w-25" />
            </Link>
          </div>
          <div>
            <ul className="list-none flex justify-center items-center ml-auto gap-5 font-semibold capitalize"></ul>
          </div>

          <div className="flex gap-4">
            <div className="relative flex ">
              <button className="mr-4" onClick={handleCartToggle}>
                <FaShoppingCart className="text-lg" />
                {uniqueItemsCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-3 px-2 py-1 bg-red-600 text-white rounded-full text-xs">
                    {uniqueItemsCount}
                  </span>
                )}
              </button>
            </div>
            <button className="bg-white text-black font-semibold rounded-lg ml-5 p-2">
              <Link to="/addproduct">Add Product</Link>
            </button>
          </div>
        </nav>
      </div>

      {/* CartPage component */}
      {isCartOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <CartPage onClose={handleCartToggle} />
        </div>
      )}
      {/* End of CartPage component */}
    </>
  );
};

export default Navbar;
