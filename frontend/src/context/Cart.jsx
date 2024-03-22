import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCartData = async () => {
    try {
      const url = "http://localhost:5000/api/cart/get-cart";
      const response = await axios.get(url);
      setCart(response.data);
    } catch (error) {
      console.log("Error fetching cart data", error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (accumulator, currentValue) =>
          accumulator +
          parseInt(currentValue.unitPrice * currentValue.quantity),
        0
      )
    );
  }, [cart]);

  const updateQuantity = async (id, quantity) => {
    try {
      const url = "http://localhost:5000/api/cart/update-quantity";
      const response = await axios.put(url, {
        _id: id,
        quantity: quantity,
      });
      setCart(response.data);
    } catch (error) {
      console.log("Error updating quantity", error);
    }
  };
  const addToCart = async (item) => {
    try {
      console.log("item", item);
      const url = "http://localhost:5000/api/cart/add-to-cart/";
      const { name, quantity, unitPrice, image } = item;
      const response = await axios.post(url, {
        name,
        quantity,
        unitPrice,
        image,
      });
      console.log("Item added to cart:", response.data);

      setCart(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const url = "http://localhost:5000/api/cart";
      const response = await axios.delete(`${url}/remove-from-cart/${id}`);
      setCart(response.data.remainingCartItems);
    } catch (error) {
      console.log("Error removing item from cart", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, total, updateQuantity, removeFromCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
