import "./App.css";
import { Autenticar, Layout, Modal, NoEncontrado } from "./componentes/compartidos";
import { Navigate, Route, Routes } from "react-router-dom";
import { Lista } from "./componentes/privado/lista";
import { Detalles } from "./componentes/privado/nueva";
import { useContext, useEffect } from "react";
import { pedirMetas } from "./servicios";
import { Acceso } from "./componentes/publico/acceso/Acceso";
import { Registro } from "./componentes/publico/registro/Registro";
import { ContextoMetas } from "./memoria";

function App() {
	const [, enviar] = useContext(ContextoMetas);

	useEffect(() => {
		async function fetchData() {
			const metas = await pedirMetas();
			enviar({ tipo: "colocar", metas });
		}
		fetchData();
	}, [enviar]);

	return (
		<Routes>
			<Route path="/" element={<Navigate to="/lista" />} />
			<Route element={<Layout />}>
				<Route path="/acceso" element={<Acceso />} />
				<Route path="/registro" element={<Registro />} />
				<Route path="*" element={<NoEncontrado />} />
			</Route>
			<Route element={<Layout privado />}>
				<Route element={<Autenticar />}>
					<Route element={<Lista />} />
					<Route path="/lista" element={<Lista />}>
						<Route
							path="/lista/:id"
							element={
								<Modal>
									<Detalles />
								</Modal>
							}
						/>
					</Route>
					<Route path="/nueva" element={<Detalles />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
