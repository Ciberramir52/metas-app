import { useContext, useEffect } from "react";
import { Credenciales } from "../../compartidos";
import { ContextoAuth } from "../../../memoria";
import { useNavigate } from "react-router-dom";
import { acceder } from "../../../servicios"

export function Acceso() {

	const navegar = useNavigate();

	const [ , enviarAuth] = useContext(ContextoAuth);


	const enviar = async (form) => {
		const token = await acceder(form);
		enviarAuth({ tipo: 'colocar', token });
		navegar('/lista');
	};

	return <Credenciales
		enviar={enviar}
		titulo="Acceso"
		boton="Acceder"
	/>
}