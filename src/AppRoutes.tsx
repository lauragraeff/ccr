import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaModuloCaminhoes from "./pages/PaginaModuloCaminhoes";

export default function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaModuloCaminhoes />} />
            </Routes>
        </BrowserRouter>
    )
}