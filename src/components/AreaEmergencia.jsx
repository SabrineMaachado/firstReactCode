import React from "react";
import "./AreaEmergencia.css";

import policia_civil_logo from "./img/policia_civil.png";
import policia_militar_logo from "./img/policia_militar.png";
import bombeiros_logo from "./img/bombeiros.png";
import denuncia_logo from "./img/denuncia.png";
import samu_logo from "./img/samu_logo.jpg";

export default function AreaEmergencia() {
	return (
		<section className='container'>
			<h1 className='table-title'>Contatos de Emergência</h1>
			<table className='contacts'>
				<tr>
					<th>POLÍCIA MILITAR</th>
					<th>BOMBEIROS</th>
					<th>POLÍCIA CIVIL</th>
					<th>DISQUE DENÚNCIA</th>
					<th>SAMU</th>
				</tr>
				<tr>
					<td>
						<a href='tel:190'>190</a>
					</td>
					<td>
						<a href='tel:193'>193</a>
					</td>
					<td>
						<a href='tel:197'>197</a>
					</td>
					<td>
						<a href='tel:181'>181</a>
					</td>
					<td>
						<a href='tel:192'>192</a>
					</td>
				</tr>
				<tr>
					<td>
						<img
							alt='Logo Polícia Militar'
							className='contact-logo'
							src={policia_militar_logo}
						/>
					</td>
					<td>
						<img
							alt='Logo Bombeiros'
							className='contact-logo'
							src={bombeiros_logo}
						/>
					</td>
					<td>
						<img
							alt='Logo Polícia Civil'
							className='contact-logo'
							src={policia_civil_logo}
						/>
					</td>
					<td>
						<img
							alt='Disque denúncia logo'
							className='contact-logo'
							src={denuncia_logo}
						/>
					</td>
					<td>
						<img
							alt='SAMU logo'
							className='contact-logo'
							src={samu_logo}
						/>
					</td>
				</tr>
			</table>
		</section>
	);
}
