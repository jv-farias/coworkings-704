import axios from "axios";
import { Header } from "../Header/Header";
import "./home.css";
import { useEffect, useState } from "react";
import CardModal from "../CardModal/CardModal";

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
        <h1 className="salas">Salas Disponíveis!</h1>
        <CardModal />
      </div>
    </div>
  );
};

export default Home;
