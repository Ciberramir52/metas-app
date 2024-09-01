import { useNavigate } from "react-router-dom";
import { Credenciales } from "../../compartidos";
import { useContext } from "react";
import { ContextoAuth } from "../../../memoria";
import { registrarse } from "../../../servicios";

export function Registro() {

	const navegar = useNavigate();

	const [, enviarAuth] = useContext(ContextoAuth);

	const enviar = async (form) => {
		const token = await registrarse(form);
		enviarAuth({ tipo: 'colocar', token });
		navegar('/lista');
	};

	return <Credenciales
		enviar={enviar}
		titulo="Registro"
		boton="Registrarme"
	/>
}