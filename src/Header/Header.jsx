import fotoCoworking from "../assets/logo.png";
import "./header.css";

export const Header = () => {
    return (
        <header className="header-container" >
            <h1>Olá, vamos fazer uma reserva?</h1>
            <img src={fotoCoworking} alt="Logo Coworkings 704" />
        </header>
    )
}