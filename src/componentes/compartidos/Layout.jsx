import { Outlet } from "react-router-dom";
import { Encabezado, Pie, Principal } from "./";

export function Layout() {
	return (
		<>
			<Encabezado />
			<Principal>
				<Outlet />
			</Principal>
			<Pie />
		</>
	);
}
