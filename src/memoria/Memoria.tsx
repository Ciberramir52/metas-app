import { createContext, ReactNode, useReducer } from "react";

// const memoria = localStorage.getItem('metas');
// const estadoInicial = memoria
//     ? JSON.parse(memoria)
//     : {
//         orden: [],
//         objetos: {}
//     };
const estadoInicial = {
	orden: [],
	objetos: {},
};

function reductor(estado, accion) {
	switch (accion.tipo) {
		case "colocar": {
			const metas = accion.metas;
			const nuevoEstado = {
				orden: metas.map((meta) => meta.id),
				objetos: metas.reduce(
					(objeto, meta) => ({ ...objeto, [meta.id]: meta }),
					{},
				),
			};		
			// localStorage.setItem('metas', JSON.stringify(nuevoEstado));
			return nuevoEstado;
		}
		case "crear": {
			// const id = uuidv4();
			const id = accion.meta.id;
			const nuevoEstado = {
				orden: [...estado.orden, id],
				objetos: {
					...estado.objetos,
					// [id]: { id, ...accion.meta },
					[id]: accion.meta,
				},
			};
			// localStorage.setItem('metas', JSON.stringify(nuevoEstado));
			return nuevoEstado;
		}
		case "actualizar": {
			const id = accion.meta.id;
			estado.objetos[id] = {
				...estado.objetos[id],
				...accion.meta,
			};

			const nuevoEstado = { ...estado };
			return nuevoEstado;
		}
		case "borrar": {
			const id = accion.id;
			const nuevoOrden = estado.orden.filter((item) => item !== id);
			delete estado.objetos[id];
			const nuevoEstado = {
				orden: nuevoOrden,
				objetos: estado.objetos,
			};
			// localStorage.setItem('metas', JSON.stringify(nuevoEstado));
			return nuevoEstado;
		}
		default:
			throw new Error();
	}
}

// reductor(estadoInicial, {tipo: 'colocar', metas: listaMock});

export const ContextoMetas = createContext(null);

interface MemoriaProps {
	children: ReactNode;
}

export function MetasMemoria({ children } : MemoriaProps) {
	const value = useReducer(reductor, estadoInicial);
	return (
		<ContextoMetas.Provider value={value}>
			{children}
		</ContextoMetas.Provider>
	);
}
