import { Link } from "react-router-dom";
import estilos from "./Vinculo.module.css";
import { FC } from "react";

interface VinculoProps {
	Icono: any;
	texto: string;
	to: string;
}

export function Vinculo({ Icono, texto, to } : VinculoProps) {
	return (
		<Link to={to} className={estilos.vinculo}>
			<Icono className={estilos.icono} />
			{texto && <span className={estilos.texto}>{texto}</span>}
		</Link>
	);
}
