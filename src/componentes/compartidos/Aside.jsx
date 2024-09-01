import { Vinculo } from "./Vinculo";
import ListaSVG from "../../img/lista.svg?react";
import NuevaSVG from "../../img/nueva.svg?react";
import estilos from "./Aside.module.css"

export function Aside() {
	return (
		<aside className={estilos.aside}>
			<Vinculo Icono={ListaSVG} texto="Lista de Metas" to="/lista" />
			<Vinculo Icono={NuevaSVG} texto="Nueva Meta" to="/nueva" />
		</aside>
	)
}