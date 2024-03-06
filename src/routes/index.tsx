import { Cadastro } from "@/pages/cadastro"
import { Coworking } from "@/pages/coworking"
import { Home } from "@/pages/home"
import { Login } from "@/pages/login"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="https://coworkings-704.vercel.app/home" element={ <Home /> } ></Route>
            <Route path="https://coworkings-704.vercel.app/login" element={ <Login/> } />
            <Route path="https://coworkings-704.vercel.app/cadastro" element={ <Cadastro/> } />
            <Route path="https://coworkings-704.vercel.app/coworking/:id" element={ <Coworking /> } />
        </Routes>
    )
}