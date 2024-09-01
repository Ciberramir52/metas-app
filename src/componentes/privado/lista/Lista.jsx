import { useContext, useEffect } from "react";
import { Meta } from "./Meta";
import { ContextoAuth, ContextoMetas } from "../../../memoria";
import { Outlet } from "react-router-dom";
import { pedirMetas } from "../../../servicios";

export function Lista() {
	const [estado, enviar] = useContext(ContextoMetas);

	const [auth] = useContext(ContextoAuth);
	useEffect(() => {
		console.log(auth);
		console.log(estado);
	}, []);

	useEffect(() => {
		async function fetchData() {
			const metas = await pedirMetas();
			enviar({ tipo: "colocar", metas });
		}
		fetchData();
	}, [enviar]);

	return (
		<>
			{estado.orden.map((id) => (
				<Meta key={id} {...estado.objetos[id]} />
			))}
			<Outlet />
		</>
	);
}
