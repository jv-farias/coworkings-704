import axios from "axios";
import React from "react";
import './cardmodal.css'
import { useEffect, useState } from "react";
const CardModal = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/salas")
      .then((resp) => {
        setDados(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* {dados.map((dado, index) => (
        <div key={index}>
          <h1>{dado.name}</h1>
        </div>
      ))} */}

      <div className="card">
        <div className="infos">
          <img
            src="https://fastly.picsum.photos/id/791/200/200.jpg?hmac=bPVayqOX5aUzsnsX99AgWaxWB3WzWqwaiSDJ-lNHUk4"
            alt="img"
          />
          <h1>Salão de Eventos</h1>
          <p>
            Capacidade para até 150 pessoas. Ar condicionado, WIFI, Sistema de
            som e imagem, Flip chart com cavalete, Microfone sem fio, Microfone
            lapela, Serviço de coffee break.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
