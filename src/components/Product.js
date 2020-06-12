import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Product = (props) => {
  let product = props.product;
  return (
    <div className="adminProducts">
      <Card style={{ width: "12rem" }}>
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>Price: {props.product.price}</Card.Text>
          <Link
            to={{
              pathname: `/${props.product._id}/edit`,
              state: { product: props.product },
            }}
          >
            <Button variant="primary">Edit</Button>
          </Link>
          <Button variant="primary" onClick={() => props.deleteItem(product)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
