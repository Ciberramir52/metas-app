import { render, screen } from "@testing-library/react";
import { Meta } from "../componentes/privado/lista/Meta";
import '@testing-library/jest-dom';
import { ReactNode } from "react";

const dataMock = {
	id: 2,
	detalles: "Leer libros",
	periodo: "anio",
	eventos: 6,
	icono: "📚",
	meta: 12,
	plazo: "2030-01-01",
	completado: 0
}

interface LinkProps {
	children: ReactNode;
}


jest.mock("react-router-dom", () => {
	const moduloOriginal = jest.requireActual('react-router-dom');
	return {
		...moduloOriginal,
		Link: ({ children } : LinkProps) => <div>{children}</div>
	}
});

describe("Componente Meta", () => {
	it("Renderiza el boton", () => {
		render(<Meta {...dataMock} />);
		const boton = screen.getByText('Completado');
		// screen.debug();
		expect(boton).toBeInTheDocument();
	});
	it("Renderiza icono", () => {
		render(<Meta {...dataMock} />);
		const icono = screen.getByText('📚');
		// screen.debug();
		expect(icono).toBeInTheDocument();
	})
})