import { Vinculo } from './Vinculo';
import estilos from './Principal.module.css';
import ListaSVG from "../../img/lista.svg?react";
import NuevaSVG from "../../img/nueva.svg?react";

export function Principal({ children }) {
    return (
        <div className={estilos.principal}>
            <aside className={estilos.aside}>
                <Vinculo Icono={ListaSVG} texto="Lista de Metas" href="/lista"/>
                <Vinculo Icono={NuevaSVG} texto="Nueva Meta" href="/nueva"/>
            </aside>
            <main className={estilos.main}>
                {children}
            </main>
        </div>
    );
}