
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from 'react-router-dom';
import fotoCoworking2 from "../../assets/coworking2.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleClickForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (nome === '' || email === '' || password === '') {
            toast.error('Você precisa preencher todos os campos!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else if (password.length < 8) {
            toast.error('Sua senha precisa ter no mínimo 8 caracteres')
        } else if (!email.includes('@') || !email.includes('.com')) {
            toast.error("Digite um email válido")
        } else if (password !== confirmPassword) {
            toast.error("As senhas devem coincidir")
        } else {

            await axios.post('https://api-backend-teste.vercel.app/users', {
                nome,
                email,
                password,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error as AxiosError);
                });

            toast.success("Cadastro efetuado com sucesso! ✅")
            setEmail('')
            setNome('')
            setPassword('')
            setConfirmPassword('')
        }
    };


    return (
        <div className="registrar bg-gradient-to-b from-blue-700 to-blue-900 h-screen relative flex">

            <div className="registrar-left hidden md:flex items-center justify-center flex-col w-1/2 h-full bg-white">
                <div className="img-coworking p-10">
                    <img src={fotoCoworking2} alt="Foto Coworking 2" className="w-[500px] rounded-xl" />
                </div>
            </div>

            <div className="registrar-right w-full h-screen overflow-hidden md:w-1/2 flex items-center justify-center flex-col">
                <div className="img-logo">
                    <img src={logo} alt="logo 704apps" className="w-40 mt-5" />
                </div>
                <h1 className="pt-5 pb-2 text-white text-lg font-semibold">Crie sua conta</h1>
                <form className="formulario-registrar flex flex-col items-center justify-center w-full xl:px-40 lg:px-20 md:px-10 sm:px-5" onSubmit={handleClickForm}>
                    <div className="flex flex-col w-[90%]" >
                        <label className="text-white pb-1">Nome</label>
                        <Input
                            type="text"
                            placeholder="Digite seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className=" w-full rounded-md border-none outline-none pl-5 mb-5 text-md"
                        />
                    </div>

                    <div className="flex flex-col w-[90%]" >
                        <label className="text-white pb-1">Email</label>
                        <Input
                            type="email"
                            placeholder="Digite seu melhor email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" w-full rounded-md border-none outline-none pl-5 mb-5 text-md"
                        />
                    </div>

                    <div className="flex flex-col w-[90%]" >
                        <label className="text-white pb-1">Senha</label>
                        <Input
                            type="password"
                            placeholder="Crie sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full  rounded-md border-none outline-none pl-5 mb-5 text-md"
                        />
                    </div>

                    <div className="flex flex-col w-[90%]" >
                        <label className="text-white pb-1">Repita a sua senha</label>
                        <Input
                            type="password"
                            placeholder="Crie sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full rounded-md border-none outline-none pl-5 mb-5 text-md"
                        />
                    </div>

                    <Button className="rounded-md border-none outline-none pl-5 mb-5 text-md bg-white  w-[90%] text-black
                    hover:text-white
                    hover:bg-blue-300" onClick={handleClickForm}>Criar Conta</Button>

                    <p className="text-white mt-5">
                        Já possui conta? <Link className="text-blue-400" to="/login">Clique aqui</Link>
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

        </div>
    );
};


