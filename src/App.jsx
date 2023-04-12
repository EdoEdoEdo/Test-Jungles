import React from "react";
import { Route, Routes } from "react-router-dom";
import { Countries } from "./components/countries";
import { CountryDetails } from "./components/details";
import { Header } from "./components/header";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<CountryDetails />} />
      </Routes>
    </>
  );
};
