import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Paginas/Home";
import Servico from "./Paginas/Servicos";
import Contato from "./Paginas/Contato";
import Projetos from "./Paginas/Projetos";
import Header from "./Comum/Header";
import Footer from "./Comum/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Servicos" element={<Servico />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
