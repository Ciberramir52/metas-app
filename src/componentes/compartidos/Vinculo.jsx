import estilos from './Vinculo.module.css';

export function Vinculo({ Icono, texto, href }) {
    return (
        <a href={href} className={estilos.vinculo}>
            <Icono className={estilos.icono} />
            {texto && <span className={estilos.texto}>{texto}</span>}
        </a>
    );
}