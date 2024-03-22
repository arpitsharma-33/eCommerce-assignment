import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../context/Cart";

const ProductCard = ({ data }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    console.log("data", data);
    addToCart(data);
  };
  return (
    <Link to={`/product-details/${data.name}`}>
      <div className="w-[200px] border-2 mt-3">
        <div className="h-[180px] mb-2">
          <img src={data.image} alt="" />
        </div>
        <div>
          <div className="flex justify-center text-blue-800 text-xl">
            {data.name}
          </div>
          <div className="flex justify-center p-1">{data.description}</div>
          <div className="flex justify-center">Quantity: {data.quantity}</div>

          <div className="flex  my-2 flex-col justify-center items-center px-3 mb-2">
            <div>${data.unitPrice}</div>
            <Link to={`/`}>
              <div
                className="flex justify-center px-4 py-1 cursor-pointer  gap-2 my-2 rounded-full items-center bg-slate-800 text-white "
                onClick={handleAddToCart}
              >
                <p>add to Cart</p>

                <FaShoppingCart />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
