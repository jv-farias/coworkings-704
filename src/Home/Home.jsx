import axios from "axios";
import { Header } from "../Header/Header";
import "./home.css";
import { useEffect, useState } from "react";

const Home = () => {

  return (
    <div className="container">
      <Header />

      <input
        className="search-input"
        type="text"
        name="search"
        id=""
        placeholder="Faça a sua pesquisa"
      />
      <div className="modal-cards">
        <h2>Salas de Coworking</h2>
        
      </div>
    </div>
  );
};

export default Home;
