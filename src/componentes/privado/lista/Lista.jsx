import { useContext, useEffect } from "react";
import { Meta } from "./Meta";
import { ContextoMetas } from "../../../memoria";
import { Outlet } from "react-router-dom";
import { pedirMetas } from "../../../servicios";

export function Lista() {
	const [estado, enviar] = useContext(ContextoMetas);

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
