import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "./img/logo.png";

export default function Menu() {
	return (
		<>
			<nav>
				<img className='logo' src={logo} alt='logo' />
				<ul>
					<li>
						<Link className='nav-link' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/cadastro-acidentes'>
							Cadastro de Acidentes
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/area-emergencia'>
							Area de Emergencia
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/Sobre'>
							Sobre
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/Suporte'>
							Suporte
						</Link>
					</li>
					<li>
						<Link className='nav-link' to='/Login'>
							Entrar
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
