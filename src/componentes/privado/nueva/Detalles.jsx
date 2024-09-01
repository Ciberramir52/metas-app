import { useContext, useEffect, useState } from "react";
import {
	actualizarMeta,
	borrarMeta,
	crearMeta,
} from "../../../servicios/";
import { useNavigate, useParams } from "react-router-dom";
import { ContextoMetas } from "../../../memoria";

export function Detalles() {
	const { id } = useParams();

	const [form, setForm] = useState({
		detalles: "",
		eventos: 1,
		periodo: "semana",
		icono: "🏃",
		completado: 0,
		meta: 52,
		plazo: "2030-01-01",
	});

	const [estado, enviar] = useContext(ContextoMetas);

	const { detalles, eventos, periodo, icono, completado, meta, plazo } = form;

	const onChange = (event, prop) => {
		console.log(`${prop}: ${event.target.value}`);
		setForm((estado) => ({ ...estado, [prop]: event.target.value }));
	};

	const navegar = useNavigate();

	const metaMemoria = estado.objetos[id];

	useEffect(() => {
		if (!id) return;
		if (!metaMemoria) return navegar("/404");
		setForm(metaMemoria);
	}, [id, metaMemoria, navegar]);

	const enCrear = async (evento) => {
		evento.preventDefault();
		// console.log(form);
		const nuevaMeta = await crearMeta(form);
		enviar({ tipo: "crear", meta: nuevaMeta });
		regresar();
	};

	const enActualizar = async (evento) => {
		evento.preventDefault();
		// console.log(form);
		const metaActualizada = await actualizarMeta(form);
		enviar({ tipo: "actualizar", meta: metaActualizada });
		regresar();
	};

	const enBorrar = async () => {
		// console.log(form);
		const id = form.id;
		await borrarMeta(id);
		enviar({ tipo: "borrar", id });
		regresar();
	};

	const regresar = () => {
		navegar("/lista");
	};

	const frecuencias = ["dia", "semana", "mes", "anio"];
	const iconos = ["💻", "🏃", "📚", "✈️", "💵"];
	return (
		<div className="tarjeta">
			<form className="p-4">
				<label className="label">
					Describe tu meta
					<input
						onChange={(e) => onChange(e, "detalles")}
						value={detalles}
						className="input"
						type="text"
						placeholder="ej. 52 caminatas"
					/>
				</label>
				<label className="label">
					Con que frecuencia deseas cumplir tu meta?{" "}
					<span>(ej. 1 vez a la semana)</span>
					<div className="flex mb-6">
						<input
							onChange={(e) => onChange(e, "eventos")}
							value={eventos}
							className="input mr-6"
							type="number"
						/>
						<select
							onChange={(e) => onChange(e, "periodo")}
							value={periodo}
							className="input"
						>
							{frecuencias.map((opcion) => (
								<option key={opcion} value={opcion}>
									{opcion}
								</option>
							))}
						</select>
					</div>
				</label>
				<label className="label">
					Cuantas veces deseas completar la meta?
					<input
						onChange={(e) => onChange(e, "meta")}
						value={meta}
						className="input"
						type="number"
					/>
				</label>
				<label className="label">
					Tienes una fecha limite?
					<input
						onChange={(e) => onChange(e, "plazo")}
						value={plazo}
						className="input"
						type="date"
					/>
				</label>
				<label className="label">
					Cuantas veces haz completado ya esta meta?
					<input
						onChange={(e) => onChange(e, "completado")}
						value={completado}
						className="input"
						type="number"
					/>
				</label>
				<label className="label">
					Escoge el icono para la meta
					<select
						onChange={(e) => onChange(e, "icono")}
						value={icono}
						className="input"
					>
						{iconos.map((icono) => (
							<option key={icono} value={icono}>
								{icono}
							</option>
						))}
					</select>
				</label>
			</form>
			<div className="botones">
				{id ? (
					<>
						<button
							onClick={enActualizar}
							className="boton boton--negro"
						>
							Actualizar
						</button>
						<button onClick={enBorrar} className="boton boton--rojo">
							Borrar
						</button>
					</>
				) : (
					<button onClick={enCrear} className="boton boton--negro">
						Crear
					</button>
				)}
				<button onClick={regresar} className="boton boton--gris">
					Cancelar
				</button>
			</div>
		</div>
	);
}
