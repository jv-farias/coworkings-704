import "./login.css"
import fotoCoworking from "../assets/coworking.png"

import logo from "../assets/logo.png"
const Login = () => {
  return (
    <div className='login'>
        <div className='login-left'>
            <div className="img-coworking">
                <img src={fotoCoworking} alt="Foto Coworking" />
            </div>
        </div>

        <div className='login-right'>
             <div className="img-logo">
                <img src={logo} alt="logo 704apps" />
            </div>
            <form className="formulario-login">
                <label className="email-login">Email</label>
                <input type="email" placeholder="Digite seu e-mail"/>

                <label className="email-senha">Senha</label>
                <input type="password" placeholder="Digite sua senha"/>
                
                <button>Login</button>

                <a href="" className="esqueceu-senha">Esqueceu sua senha?</a>


                <p className="criar-conta">É novo por aqui? <a href="">Crie sua conta</a></p>
            </form>
        </div>
    </div>
  )
}

export default Login