import React from "react";
import { useState } from "react";
import { updateProduct } from "../models/product";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CloudinaryContext, Image } from "cloudinary-react";
import ImageUpload from "../components/ImageUpload";

const EditProduct = (props) => {
  const myProduct = props.location.state.product;
  const [productData, setProductData] = useState(props.location.state.product);

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const setImage = (props) => {
    setProductData({ image: props });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productData);
    updateProduct(productData).then((res) => {
      console.log(res);
      setProductData({
        name: "",
        price: "",
        image: "",
        description: "",
        tags: [],
      });
      props.history.push("/inventory");
    });
  };

  return (
    <div>
      <br />
      <br />
      <h1>Edit Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="text"
            id="name"
            name="name"
            value={productData.name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Price</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="number"
            id="price"
            name="price"
            value={productData.price}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Image</Form.Label>
          <CloudinaryContext cloudName="geddydukes">
            <ImageUpload setImage={setImage} />
          </CloudinaryContext>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>description</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="textarea"
            id="description"
            name="description"
            value={productData.description}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Tags</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="tags"
            id="tags"
            name="tags"
            value={productData.tags}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
