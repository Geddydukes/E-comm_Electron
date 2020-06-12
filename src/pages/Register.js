import React, { useState } from "react";
import { createUser } from "../models/user";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = (props) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    code: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(userData).then((res) => {
      console.log(res);
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        code: "",
      });
      props.history.push("/login");
    });
  };
  return (
    <div className="registerContainer">
      <br />
      <br />
      <br />
      <h4>Register</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Last Name</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="email"
            id="email"
            name="email"
            value={userData.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={userData.phoneNumber}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Address</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="text"
            id="address"
            name="address"
            value={userData.address}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Password</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="password"
            id="password"
            name="password"
            value={userData.password}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Confirm Password</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="password"
            id="password2"
            name="password2"
            value={userData.password2}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Code</Form.Label>
          <input
            onChange={handleChange}
            className="form-control form-control-lg"
            type="code"
            id="code"
            name="code"
            value={userData.code}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
