import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Header } from '../Header/Header';
import './home.css';
import CardModal from '../CardModal/CardModal';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <Header />
      <div className="input-busca">
        <input
          className="search-input"
          type="text"
          name="search"
          id=""
          placeholder="Faça a sua pesquisa"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="buttonSearch"><FaSearch /></button>
      </div>
      <div className="modal-cards">
        <h1 className="salas">Salas Disponíveis!</h1>
        <CardModal searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Home;
