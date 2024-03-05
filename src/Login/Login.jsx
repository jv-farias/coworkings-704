import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import fotoCoworking from "../assets/coworking.png";
import logo from "../assets/logo.png";

const Login = () => {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const submitLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/usuarios");
      if (login === response.data[1].email && senha === response.data[1].password) {
        window.location.href = "/home";
      } else if (login === '' || senha === '') {
        toast.error("Você precisa preencher todos os campos!");
      } else {
        toast.error("Usuário ou senha incorretos!");
        setLogin('')
        setSenha('')
      }
    } catch (error) {
      console.error(error)
    }
  };

  const handleModal = () => {
    setModal(!modal);
    setInput("");
  };

  const handlePassword = () => {
    if (input === "" || !input.includes("@") || !input.includes(".com")) {
      toast.error("Digite um email válido!");
    } else {
      toast.success("Email enviado com sucesso, verifique sua caixa de entrada! ✅");
      setInput("");
      setModal(false);
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
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />

          <label className="email-senha">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="buttonLogin" onClick={submitLogin}>Login</button>

          <a href="" className="esqueceu-senha" onClick={handleModal}>
            Esqueceu sua senha?
          </a>

          <p className="criar-conta">
            É novo por aqui? <Link className="link-login" to="/registrar">Crie sua conta</Link>
          </p>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>

      {modal && (
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="fundo-modal" onClick={handleModal}></div>
          <div className="nova-senha">
            <h1>Esqueceu sua senha?</h1>
            <input
              type="email"
              placeholder="Digite aqui seu email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="buttonEnviar" onClick={handlePassword}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
