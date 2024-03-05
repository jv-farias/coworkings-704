import axios from "axios"


export const Home = () => {

    
    axios.get('http://localhost:3000/salas')
        .then(resp => {
            console.log(resp);
        })
        .catch(error => {
            console.error(error);
        });
    return (
        <div>
   
        </div>
    )
}