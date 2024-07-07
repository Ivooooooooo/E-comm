import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { getAllCategories } from "../../services/products";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Apple
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;