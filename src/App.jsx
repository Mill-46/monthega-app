import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import ListCategories from "./components/widget/ListCategories";
import ListCountry from "./components/widget/ListCountry";
import MonthegaSearch from "./components/page/MonthegaSearch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/monthega-app" element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/search" element={<MonthegaSearch />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/category/:food" element={<ListCategories />} />
        <Route path="/country/:flag" element={<ListCountry />} />
      </Routes>
    </>
  );
}

export default App;
