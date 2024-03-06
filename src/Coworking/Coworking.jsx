import React, { useEffect, useState } from 'react'
import './coworking.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../Header/Header'

const Coworking = () => {
    const params = useParams();
    const [coworking, setCoworking] = useState()

    useEffect(() => {

        axios.get(`http://localhost:3000/salas/${params.id}`)
        .then(response => {
            setCoworking(response.data);
        })
        .catch(error => console.error(error))
        
    }, [params.id]);
  return ( 
    <div>
        {
            coworking && 
            <>
                <Header />
                <h1>
                    {coworking.name}
                </h1>
            </>
        }
    </div>
  )
}

export default Coworking