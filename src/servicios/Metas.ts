import { useContext } from "react";
import { MetaTipo } from "../tipos";

export async function pedirMetas(): Promise<MetaTipo[]> {
	const token = localStorage.getItem('token');
	// const response = await fetch('/api/metas');

	const response = await fetch('/api/metas', {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`, // Añade el token al encabezado Authorization
		},
	})
	const metas: MetaTipo[] = await response.json();
	return metas;
}

export async function pedirMeta(id: number): Promise<MetaTipo> {
	const token = localStorage.getItem('token');
	const response = await fetch(`/api/metas/${id}`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`, // Añade el token al encabezado Authorization
		},
	})
	const meta: MetaTipo = await response.json();
	return meta;
}

export async function crearMeta(meta: MetaTipo): Promise<MetaTipo> {
	const token = localStorage.getItem('token');
	const response = await fetch("/api/metas", {
		method: "POST",
		body: JSON.stringify(meta),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			'Authorization': `Bearer ${token}`, // Añade el token al encabezado Authorization
		},
	});
	const metaCreada: MetaTipo = await response.json();
	console.log("Meta Creada!", metaCreada);
	return metaCreada;
}

export async function actualizarMeta(meta: MetaTipo): Promise<MetaTipo> {
	const token = localStorage.getItem('token');
	const response = await fetch(`/api/metas/${meta.id}`, {
		method: "PUT",
		body: JSON.stringify(meta),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			'Authorization': `Bearer ${token}`, // Añade el token al encabezado Authorization
		},
	});
	const metaActualizada: MetaTipo = await response.json();
	console.log("Meta Actualizada!", metaActualizada);
	return metaActualizada;
}

export async function borrarMeta(id: number): Promise<void> {
	const token = localStorage.getItem('token');
	await fetch(`/api/metas/${id}`, {
		method: "DELETE",
		headers: {
			'Authorization': `Bearer ${token}`, // Añade el token al encabezado Authorization
		}
	});
	console.log("Meta Borrada!", id);
}
