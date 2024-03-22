import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ProductDetails = () => {
  const { name } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/get-product"
        );
        if (response.ok) {
          const data = await response.json();
          const foundProduct = data.find((item) => item.name === name);
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            console.error("Product not found");
          }
        } else {
          console.error(
            "Failed to fetch product details:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [name]);




  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl mb-7 font-bold flex items-center justify-center">
        Product Details
      </h1>
      <div className="flex w-full items-center justify-center">
        <div>
          <img src={product.image} alt="" width="400px" />
        </div>
        <div>
          <h1>Name: {product.name}</h1>
          <h2>Description: {product.description}</h2>
          <h2>Unit Price: {product.unitPrice}</h2>
          <h2>Quantity: {product.quantity}</h2>
          {/* <div onClick={handleAddToCart} className="cursor-pointer">
            <FaShoppingCart />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
