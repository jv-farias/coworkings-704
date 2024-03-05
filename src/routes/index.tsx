import { Cadastro } from "@/pages/cadastro"
import { Home } from "@/pages/home"
import { Login } from "@/pages/login"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={ <Home /> } ></Route>
            <Route path="/login" element={ <Login/> } />
            <Route path="/cadastro" element={ <Cadastro/> } />
        </Routes>
    )
}