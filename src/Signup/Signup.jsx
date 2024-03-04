import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from 'react-router-dom';
import fotoCoworking2 from "../assets/coworking2.png";
import './signup.css';

const Signup = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const cliqueForm = (event) => {
    event.preventDefault();
  };

  const verificarInputs = () => {
    if(nome === '' || email === '' || password === '') {
      alert("Você precisa preencher todos os campos!")
    } else if(password.length < 8) {
      alert('Sua senha precisa ter no mínimo 8 caracteres')
    } else if(!email.includes('@') || !email.includes('.com') ) {
      alert("Digite um email válido")
    } else {
      alert("Cadastro efetuado com sucesso! ✅")
      setEmail('')
      setNome('')
      setPassword('')
    }
  }

  return (
    <div className="registrar">

      <div className="registrar-left">
        <div className="img-coworking">
          <img src={fotoCoworking2} alt="Foto Coworking 2" />
        </div>
      </div>

      <div className="registrar-right">
        <div className="img-logo">
          <img src={logo} alt="logo 704apps" />
        </div>
        <h1 className="headline">Crie sua conta</h1>
        <form className="formulario-registrar" onSubmit={cliqueForm}>
          <label>Nome</label>
          <input 
          type="text" 
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          />

          <label>Email</label>
          <input 
          type="email" 
          placeholder="Digite seu melhor email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input 
          type="password" 
          placeholder="Crie sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={verificarInputs}>Criar conta</button>

          <p className="fazer-login">
            Já possui conta? <Link className="link-registrar" to="/">Clique aqui!</Link>
          </p>
        </form>
      </div>

    </div>
  );
};

export default Signup;
