import axios from "axios"
import { Header } from "../Header/Header";
import "./home.css"
import { useEffect, useState } from "react";



 const Home = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/salas')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    return (
        <div className="container" >
            <Header />
            
            <input className="search-input" type="text" name="search" id="" placeholder= "Faça a sua pesquisa"
            />
            <div className="modal-cards" >
                <h2>Salas de Coworking</h2>
                {data.map(item => (
      <div key={item.id}>{item.name}</div>
    ))}

            </div>
        </div>
    )
}

export default Home;