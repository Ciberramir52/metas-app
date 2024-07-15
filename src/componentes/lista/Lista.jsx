import { useContext, useEffect } from "react";
import { Meta } from "./Meta";
import { Contexto } from "../../servicios/Memoria";
import { Outlet } from "react-router-dom";

export function Lista() {

    const [estado] = useContext(Contexto);

    return (
        <>
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]} />)}
            <Outlet />
        </>
    );
}