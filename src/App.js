import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./config/routes";
import UserContext from "./context/UserContext";
import { logoutUser } from "./models/user";
import "./App.css";
import Container from "react-bootstrap/Container";

function App(props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("uid"));

  const storeUser = (userId) => {
    setCurrentUser(userId);
    localStorage.setItem("uid", userId);
  };

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("uid");
    logoutUser().then((res) => {
      console.log(res);
      setCurrentUser(null);
      props.history.push("/");
    });
  };

  return (
    <UserContext.Provider value={{ currentUser, storeUser, logout }}>
      <div className="appContainer">
        <Header />
        <Container className="App-container">
          <Routes />
        </Container>
      </div>
    </UserContext.Provider>
  );
}

export default withRouter(App);
