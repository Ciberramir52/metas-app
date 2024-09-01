import { Outlet } from "react-router-dom";
import { Aside, Encabezado, Pie } from "./";
import estilos from "./Layout.module.css";

export function Layout({ privado }) {
	return (
		<>
			<Encabezado />
			<main className={estilos.main}>
				{privado && <Aside />}
				<section className={estilos.section}>
					<Outlet />
				</section>
			</main>
			<Pie />
		</>
	);
}
