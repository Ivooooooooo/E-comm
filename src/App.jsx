import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainerComponent/ItemListContainerComponent";
import Footer from "./components/FooterComponent/FooterComponent";
import React from "react";
import "./App.css";

const App = () => {
  const navbarItems = [
    { url: "#products", text: "PRODUCTOS" },
    { url: "#sale", text: "OFERTAS" },
    { url: "#aboutus", text: "SOBRE NOSOTROS" },
  ];

  return (
    <>
      <span></span>
      <NavBarComponent logo="TECHGAMER" items={navbarItems} />
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda."} />
      <Footer />
    </>
  );
};

export default App;
