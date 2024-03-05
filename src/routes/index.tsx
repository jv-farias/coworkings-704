import Header from "@/components/Header"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Header />} ></Route>
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    )
}