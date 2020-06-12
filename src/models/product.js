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

const deleteProduct = (productData) => {
  return fetch(`${appApi}/products/${productData._id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const updateProduct = (productData) => {
  console.log(productData);
  return fetch(`${appApi}/products/${productData._id}/edit`, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

module.exports = {
  indexProducts,
  showProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
