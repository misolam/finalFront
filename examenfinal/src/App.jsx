import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ThemeDataProvider from "./contexts/ThemeDataContext";
import Card from "./components/Card";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <ThemeDataProvider>
        <Header />
        <Navbar />
        <Routes>
          
          <Route path="/home" element={<Card/>} />
          <Route path="/home/:id" element={<Detail/>} />
          <Route path="/contacto" element={<div>contacto</div>} />
          <Route path="/destacados" element={<div>destacados</div>} />
        </Routes>
      </ThemeDataProvider>
    </>
  );
}

export default App;
