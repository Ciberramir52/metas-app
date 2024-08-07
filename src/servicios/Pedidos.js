export async function pedirMetas() {
	const response = await fetch("/api/metas");
	const metas = await response.json();
	return metas;
}

export async function pedirMeta(id) {
	const response = await fetch(`/api/meta/${id}`);
	const meta = await response.json();
	return meta;
}

export async function crearMeta(meta) {
	const response = await fetch("/api/metas", {
		method: "POST",
		body: JSON.stringify(meta),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	});
	const metaCreada = await response.json();
	console.log("Meta Creada!", metaCreada);
	return metaCreada;
}

export async function actualizarMeta(meta) {
	const response = await fetch(`/api/metas/${meta.id}`, {
		method: "PUT",
		body: JSON.stringify(meta),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	});
	const metaActualizada = await response.json();
	console.log("Meta Actualizada!", metaActualizada);
	return metaActualizada;
}

export async function borrarMeta(id) {
	await fetch(`/api/metas/${id}`, {
		method: "DELETE",
	});
	console.log("Meta Borrada!", id);
}
