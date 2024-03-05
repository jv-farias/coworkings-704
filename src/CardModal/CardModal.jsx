import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cardmodal.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const CardModal = ({ searchTerm }) => {
  const [dados, setDados] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/salas')
      .then((resp) => {
        setDados(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleModal = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const filteredData = dados.filter((dado) => {
    return dado.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="cards-container">
      <div className="cards">
        {filteredData.map((dado) => (
          <div key={dado.id} className={`infos ${activeCard === dado.id ? 'modal-open' : ''}`}>
            <img src={dado.image} alt="img" />
            <h1>{dado.name}</h1>
            <p>{dado.description}</p>
            <div className={`horarios ${activeCard === dado.id ? 'horarios_open' : ''}`}>
              {dado.hours.map((hora, index) => (
                <div key={index} className="horario">
                  <p>{hora.time}</p>
                </div>
              ))}
            </div>
            <button className="button_arrow" onClick={() => handleModal(dado.id)}>
              {activeCard === dado.id ? <FaArrowUp className="arrow_up" /> : <FaArrowDown className="arrow_down" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardModal;
