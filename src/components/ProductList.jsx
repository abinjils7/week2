// ProductList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      }):
  }, []);

  return (
    <div>

        <h1>welcome </h1>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid gray", marginleft: "30px", padding: "10px", width:"50%"}}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ₹{product.price}</p>
          <p>Category:{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
