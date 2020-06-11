import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = (props) => {
  console.log("this is the props", props);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.product.image} alt={props.name} />
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>Price: {props.product.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
