import "./login.css";
import fotoCoworking from "../assets/coworking.png";
import { useState } from "react";
import logo from "../assets/logo.png";

const Login = () => {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");

  const handleModal = () => {
    setModal(!modal);
    setInput(""); // Limpa o campo de entrada quando o modal é fechado
  };

  const handlePassword = () => {
    if (input === "" || !input.includes("@")) {
      alert("Digite um email válido!");
      setInput("");
    } else {
      alert("Email enviado com sucesso ✅");
      setInput("");
      setModal(false)
    }
  };

  const cliqueForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="login-left">
        <div className="img-coworking">
          <img src={fotoCoworking} alt="Foto Coworking" />
        </div>
      </div>

      <div className="login-right">
        <div className="img-logo">
          <img src={logo} alt="logo 704apps" />
        </div>
        <form className="formulario-login" onClick={cliqueForm}>
          <label className="email-login">Email</label>
          <input type="email" placeholder="Digite seu e-mail" />

          <label className="email-senha">Senha</label>
          <input type="password" placeholder="Digite sua senha" />

          <button>Login</button>

          <a href="" className="esqueceu-senha" onClick={handleModal}>
            Esqueceu sua senha?
          </a>

          <p className="criar-conta">
            É novo por aqui? <a href="">Crie sua conta</a>
          </p>
        </form>
      </div>

      {modal && (
        <div>
          <div className="fundo-modal" onClick={handleModal}></div>
          <div className="nova-senha">
            <input
              type="email"
              placeholder="Digite aqui seu email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handlePassword}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
