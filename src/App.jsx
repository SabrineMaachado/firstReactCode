import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CadastroAcidentes  from "./pages/CadastroAcidentes";
import Menu from "./components/Menu";
import AreaEmergencia from "./components/AreaEmergencia";
import Rodape from "./components/Rodape";
import Suporte from "./pages/Suporte";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Menu />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cadastro-acidentes' element={<CadastroAcidentes />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/area-emergencia' element={<AreaEmergencia />} />
					<Route path='/rodape' element={<Rodape />} />
					<Route path='/suporte' element={<Suporte />} />
					<Route path='/sobre' element={<Sobre />} />
					<Route path='/login' element={<Login />} />
				</Routes>
				<Rodape />
			</BrowserRouter>
		</>
	);
}
