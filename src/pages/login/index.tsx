import fotoCoworking from "../../assets/coworking.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";

export const Login = () => {
  const [input, setInput] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const submitLogin = async () => {
    try {
      const response = await axios.get(
        "https://api-backend-teste.vercel.app/users"
      );
      if (
        login === response.data[2].email &&
        senha === response.data[2].password
      ) {
        console.log("deu certo");
        window.location.href = "/home";
      } else if (login === "" || senha === "") {
        toast.error("Você precisa preencher todos os campos!");
      } else {
        toast.error("Usuário ou senha incorretos!");
        setLogin("");
        setSenha("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePassword = () => {
    if (input === "" || !input.includes("@") || !input.includes(".com")) {
      toast.error("Digite um email válido!");
    } else {
      toast.success(
        "Email enviado com sucesso, verifique sua caixa de entrada! ✅"
      );
      setInput("");
    }
  };

  const cliqueForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen flex relative">
      <div className="h-[100vh] hidden md:flex items-center justify-center flex-col w-1/2  bg-white">
        <div className="img-coworking">
          <img src={fotoCoworking} alt="Foto Coworking" className="max-w-lg" />
        </div>
      </div>

      <div className="login-right w-full md:w-1/2 flex items-center justify-center flex-col">
        <div className="img-logo">
          <img src={logo} alt="logo 704apps" className="w-60 mt-5 mb-10" />
        </div>
        <form
          className="flex flex-col items-center justify-center"
          onClick={cliqueForm}
        >
          <div className="flex flex-col">
            <label className="mb-2 text-white">Email</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              required
              className="w-[400px] h-[60px] rounded-md border-none outline-none pl-5 mb-5 text-md"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-white">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              required
              className="w-[400px] h-[60px] rounded-md border-none outline-none pl-5 mb-5 text-md"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button
            className="w-[400px] h-[60px] rounded-md border-none outline-none pl-5 mb-5 text-md bg-white 
                    hover:bg-blue-300"
            onClick={submitLogin}
          >
            Login
          </button>
          <div className="cursor-pointer">
            <Dialog>
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
              <DialogTrigger asChild>
                <p className="font-semibold text-white text-xl mt-5">
                  Esqueceu a senha?
                </p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Recuperação de senha</DialogTitle>
                  <DialogDescription>
                    Digite o email fornecido no ato do cadastro.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center">
                  <div className="flex gap-2 flex-col w-full">
                    <Label>Email</Label>
                    <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    id="link"
                    type="email"
                    className="w-full"
                    placeholder="Digite o seu email"
                    />
                  </div>
                </div>

                <DialogFooter className="sm:justify-end">
                  <Button onClick={handlePassword} type="submit" className="w-full bg-[#1E3E97] hover:bg-[#2e4ca0]">Enviar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <p className="criar-conta text-white mt-7">
            É novo por aqui?{" "}
            <Link className="link-login text-blue-400" to="/cadastro">
              Crie sua conta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
