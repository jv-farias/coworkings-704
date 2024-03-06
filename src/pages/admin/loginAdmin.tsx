import { Input } from "@/components/ui/input"
import logoCoworking from "../../assets/logo.png"
import { Label } from "@/components/ui/label"

export const LoginAdmin = () => {
    return (
        <div className="w-full h-screen bg-slate-100" >
            <div className="h-screen flex items-center justify-center gap-3 flex-col bg-gray-300 ">
                <img className="w-[200px]" src={logoCoworking} alt="Logo Coworking" />
                <h1>Gerencie as salas do seu Coworking!</h1>
                <div>
                    <Label>Email</Label>
                    <Input type="email" required placeholder="Digiteo seu emaill" />
                </div>
            </div>
        </div>
    )
}