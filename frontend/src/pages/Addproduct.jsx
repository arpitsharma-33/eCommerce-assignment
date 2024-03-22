import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: "",
    unitPrice: "",
    file: null,
  });
  const url = "http://localhost:5000/api/products/add-product";

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "file" ? e.target.files[0] : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const createProduct = async () => {
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("description", formData.description);
      form.append("quantity", formData.quantity);
      form.append("unitPrice", formData.unitPrice);
      form.append("file", formData.file);

      const response = await axios.post(url, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-black text-white rounded-lg shadow-md p-6 flex flex-col"
      >
        <h2 className="text-2xl mb-7 font-bold flex items-center justify-center">
          Add Product
        </h2>
        <Form.Group
          controlId="productName"
          className="flex flex-col space-y-2  w-full"
        >
          <div className="block text-sm font-bold ">
            <Form.Label>Product Name</Form.Label>
          </div>
          <div className="w-full ">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </Form.Group>

        <Form.Group
          controlId="productDescription"
          className="lex flex-col   mt-3  space-y-2  w-full"
        >
          <div className="block text-sm font-bold ">
            <Form.Label>Description</Form.Label>
          </div>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </Form.Group>

        <Form.Group
          controlId="productQuantity"
          className="flex flex-col  mt-3  space-y-2  w-full"
        >
          <div className="block text-sm font-bold ">
            <Form.Label>Quantity</Form.Label>
          </div>
          <Form.Control
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </Form.Group>

        <Form.Group
          controlId="productUnitPrice"
          className="flex flex-col  mt-3   space-y-2  w-full"
        >
          <div className="block text-sm font-bold ">
            <Form.Label>Unit Price</Form.Label>
          </div>
          <Form.Control
            type="text"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            placeholder="Enter unit price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </Form.Group>

        <Form.Group
          controlId="productImage"
          className="flex flex-col  mt-3  space-y-2  w-full"
        >
          <div className="block text-sm font-bold ">
            <Form.Label>Image</Form.Label>
          </div>

          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-1 px-1 
          text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          />
        </Form.Group>
        <div className=" flex items-center justify-center mt-6 ">
          <Button
            variant="primary"
            type="submit"
            className=" p-2 bg-blue-400 rounded-lg text-black"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;
