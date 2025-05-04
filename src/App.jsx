// src/App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Foter";
import MainPage from "./pages/MainPage";
import Listpage from "./pages/Listpage";
import Gridview from "./pages/Gridview";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import ChatInterface from "./pages/ChatInterface";
import ProfileInterface from "./pages/ProfileInterface"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Listpage" element={<Listpage />} />
        <Route path="/Gridview" element={<Gridview />} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/ChatInterface" element={<ChatInterface/>}/>
        <Route path="/ProfileInterface" element={<ProfileInterface/>}/>
      </Routes>
  
      <Footer />
    </>
  );
};

export default App;
