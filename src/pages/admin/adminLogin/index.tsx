import { Label } from "@/components/ui/label"
import logoCoworking from "../../../assets/logo.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import axios from "axios"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"




export const AdminLogin = () => {

    const [input, setInput] = useState<any>("");
    const [login, setLogin] = useState<any>("");
    const [senha, setSenha] = useState<any>("");

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

    return (
        <div className="w-screen h-screen lg:bg-slate-100 flex items-center justify-center bg-blue-700 ">
            <div className="flex gap-6 flex-col items-center lg:p-20 flex-wrap bg-blue-700 rounded-2xl p-10 " >
                <div className="flex flex-col items-center gap-4  " >
                    <img className="w-[12.5rem] mb-6" src={logoCoworking} alt="Logo Coworking" />
                    <h1 className="text-xl font-semibold text-white">Gerencie as salas do seu Coworking!</h1>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                    <Label className="text-base text-white" >Email</Label>
                    <Input value={input} onChange={(e) => setInput(e.target.value)} type="email" required placeholder="Digite o seu email" />
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-2">
                    <Label className="text-base text-white" >Senha</Label>
                    <Input type="password" required placeholder="Digite a sua senha" />
                    <div className="cursor-pointer" >
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
                                <p className="font-semibold text-sm text-blue-200" >Esqueceu a senha?</p>
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
                                        <Label>
                                            Email
                                        </Label>
                                        <Input
                                            id="link"
                                            type="email"
                                            className="w-full"
                                            placeholder="Digite o seu email"
                                        />
                                    </div>
                                </div>

                                <DialogFooter className="sm:justify-end">
                                    <Button onClick={handlePassword} className="w-full" >Enviar</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>


                <div className="w-full" >
                    <Button className="w-full" type="submit" onClick={submitLogin} >Fazer Login</Button>
                </div>
            </div>
        </div>
    )
}