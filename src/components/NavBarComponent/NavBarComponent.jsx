<<<<<<< HEAD
import React from "react";

import { Link } from "react-router-dom";
import { getAllCategories } from "../../services/productsServices";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${category}`}>{category}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};
=======
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavBarComponent.css";

const NavBarComponent = ({ 
  logo = "Logo", 
  items 
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">{logo}</a>
        </div>
        <ul className="navbar-menu">
          {items.map((item, index) => (
            <li className="navbar-item" key={index}>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
        <CartWidgetComponent />
      </div>
    </nav>
  );
};

>>>>>>> e21aa20057951619c0f6fd04af5e723362d784dc
export default NavBarComponent;
