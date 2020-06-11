const appApi = "http://localhost:4000/api/v1";

const indexProducts = async () => {
  const res = await fetch(`${appApi}/products`, { method: "Get" });
  const json = await res.json();
  return json;
};

const showProduct = (productId) => {
  return fetch(`${appApi}/products/${productId}`, {
    method: "Get",
  }).then((res) => res.json());
};

const createProduct = (productData) => {
  console.log(productData);
  return fetch(`${appApi}/products/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(productData),
  }).then((res) => res.json());
};

module.exports = {
  indexProducts,
  showProduct,
  createProduct,
};
