import { Link } from "react-router-dom";
import estilos from "./Vinculo.module.css";

export function Vinculo({ Icono, texto, to }) {
	return (
		<Link to={to} className={estilos.vinculo}>
			<Icono className={estilos.icono} />
			{texto && <span className={estilos.texto}>{texto}</span>}
		</Link>
	);
}
