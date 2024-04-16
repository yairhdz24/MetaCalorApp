import { Navigate, Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { Contact } from "../components/Contact"


export const LandingRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}
