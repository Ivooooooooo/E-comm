import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import ItemDetailsContainer from "../pages/ItemDetailsContainer";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";

const categories = ["beauty", "Categoría2", "Categoría3"];

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent categories={categories} />
      <Routes>
        <Route path="/" element={<ItemListContainerComponent />} />
        <Route path="/category/:categoryId" element={<CategoryItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailsContainer />} />
      </Routes>
    </Router>
  );
};

const CategoryItemListContainer = () => {
  const { categoryId } = useParams();
  return <ItemListContainerComponent category={categoryId} />;
};

export default MainRoutes;
