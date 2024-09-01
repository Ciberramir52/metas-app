import { ChangeEvent, useState } from "react";
import estilos from "./Credenciales.module.css";

interface CredencialesProps {
	enviar: Function;
	titulo: string;
	boton: string;
}

export function Credenciales({ enviar, titulo, boton }:CredencialesProps) {
	const [form, setForm] = useState({
		usuario: "",
		clave: ""
	});

	const { usuario, clave } = form;

	const onChange = (event: ChangeEvent, prop: string) => {
		const value = (event.target as HTMLInputElement).value;
		setForm((estado) => ({ ...estado, [prop]: value }));
	}

	const enAcceder = async (evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		evento.preventDefault();
		enviar(form);
	}

	return (
		<div className={'tarjeta ' + estilos.auth}>
			<h1 className={estilos.head}>{titulo}</h1>
			<form className="p-4">
				<label className="label">
					Usuario
					<input onChange={(e) => onChange(e, "usuario")} value={usuario}  placeholder="Escribe tu email" type="email" className="input" />
				</label>
				<label className="label">
					Clave
					<input onChange={(e) => onChange(e, "clave")} placeholder="Escribe tu clave" value={clave} type="password" className="input" />
				</label>
			</form>
			<div className="botones">
				<button className="boton boton--negro" onClick={(e) => enAcceder(e)}>{boton}</button>
			</div>
		</div>
	);
}