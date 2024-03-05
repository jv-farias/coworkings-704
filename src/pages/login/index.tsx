
import fotoCoworking from "../../assets/coworking.png";
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState("");

    const handleModal = () => {
        setModal(!modal);
        setInput("");
    };

    const handlePassword = () => {
        if (input === "" || !input.includes("@") || !input.includes(".com")) {
            toast.error("Digite um email válido!");
            setInput("");
        } else {
            toast.success("Email enviado com sucesso, verifique sua caixa de entrada! ✅");
            setInput("");
            setModal(false)
        }
    };

    const cliqueForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    return (
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen flex relative">

            <div className="h-[100vh] hidden md:flex items-center justify-center flex-col w-1/2  bg-white">
                <div className="img-coworking">
                    <img src={fotoCoworking} alt="Foto Coworking" className="w-80" />
                </div>
            </div>

            <div className="login-right w-full md:w-1/2 flex items-center justify-center flex-col">
                <div className="img-logo">
                    <img src={logo} alt="logo 704apps" className="w-60 mt-5 mb-20" />
                </div>
                <form className="flex flex-col items-center justify-center" onClick={cliqueForm}>
                    <div className="flex flex-col" >
                        <label className="mb-2 text-white">Email</label>
                        <input type="email" placeholder="Digite seu e-mail" required className="w-[400px] h-[60px] rounded-md border-none outline-none pl-5 mb-5 text-md" />
                    </div>
                    <div className="flex flex-col" >

                        <label className="mb-2 text-white">Senha</label>
                        <input type="password" placeholder="Digite sua senha" required className="w-[400px] h-[60px] rounded-md border-none outline-none pl-5 mb-5 text-md" />
                    </div>


                    <button className="w-[400px] h-[60px] rounded-md border-none outline-none pl-5 mb-5 text-md bg-white 
                    hover:bg-blue-300">Login</button>

                    <a href="" className="esqueceu-senha text-white place-items-end" onClick={handleModal}>
                        Esqueceu sua senha?
                    </a>

                    <p className="criar-conta text-white mt-10">
                        É novo por aqui? 
                        <Link className="link-login text-blue-400" to="/cadastro">Crie sua conta</Link>
                    </p>
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
                    <div className="nova-senha fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-blue-900 flex flex-col items-center justify-center rounded-lg p-6">

                        <h1 className="text-white pb-4 text-lg">Esqueceu sua senha?</h1>
                        <input
                            type="email"
                            placeholder="Digite aqui seu email"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="input-login"
                        />
                        <button onClick={handlePassword} className="btn-login">Enviar</button>
                    </div>
                </div>
            )}
        </div>
    );
};


