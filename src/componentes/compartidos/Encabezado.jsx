import estilos from "./Encabezado.module.css";
import LogoSVG from "../../img/logo.svg?react";
import PerfilSVG from "../../img/perfil.svg?react";
import { Vinculo } from "./Vinculo";

export function Encabezado() {
	return (
		<header className={estilos.encabezado}>
			<div className={estilos.contenedor}>
				<LogoSVG className={estilos.logo} />
				<a href="/" className={estilos.titulo}>
					Metas App
				</a>
			</div>
			<nav>
				<Vinculo Icono={PerfilSVG} to="/perfil" />
			</nav>
		</header>
	);
}
