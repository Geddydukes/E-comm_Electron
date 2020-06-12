import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { indexProducts, deleteProduct } from "../models/product";
import Product from "../components/Product";
import { CardDeck } from "react-bootstrap";

const Inventory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    grabProducts();
  }, [products]);

  const grabProducts = async () => {
    let myProducts = await indexProducts();
    setProducts(myProducts.products);
  };

  const deleteItem = async (productData) => {
    console.log(productData);
    const json = await deleteProduct(productData);
    console.log(json);
    const myProducts = [...products].filter((product) => {
      return product._id !== json.id;
    });
  };

  let productList = products.map((product, index) => {
    return <Product product={product} key={index} deleteItem={deleteItem} />;
  });

  return (
    <div>
      <h1>All Products</h1>
      <CardDeck>{products ? productList : "Loading"}</CardDeck>
    </div>
  );
};

export default Inventory;
