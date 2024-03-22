import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "http://localhost:5000/api/products/get-product"
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setProducts(data);
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex  justify-center">
      <div className="grid grid-cols-3  gap-10">
        {products.map((item) => (
          <h3 key={item.id}>
            <ProductCard data={item} />
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Products;
