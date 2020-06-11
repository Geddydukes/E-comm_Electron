import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { indexProducts } from "../models/product";
import Product from "../components/Product";

const Inventory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    grabProducts();
  }, []);

  const grabProducts = async () => {
    let myProducts = await indexProducts();
    console.log(myProducts);
    setProducts(myProducts.products);
  };

  let productList = products.map((product, index) => {
    return (
      <Link to={`/products/${product._id}`} key={index}>
        <Product product={product} />
      </Link>
    );
  });

  return (
    <div>
      <h1>All Products</h1>
      {products ? productList : "Loading"}
    </div>
  );
};

export default Inventory;
