import { useContext, useEffect, useState } from "react";
import { actualizarMeta, borrarMeta, Contexto, crearMeta } from "../../servicios/";
import { useNavigate, useParams } from "react-router-dom";

export function Detalles() {

    const [estado, enviar] = useContext(Contexto);
    const { id } = useParams();

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        icono: '🏃',
        completado: 0,
        meta: 52,
        plazo: '2030-01-01'
    });

    const navegar = useNavigate()

    const crear = async () => {
        // console.log(form);
        const nuevaMeta = await crearMeta(form);
        enviar({ tipo: 'crear', meta: nuevaMeta });
        navegar('/lista');
    }

    const actualizar = async () => {
        // console.log(form);
        const metaActualizada = await actualizarMeta(form);
        enviar({ tipo: 'actualizar', meta: metaActualizada });
        navegar('/lista');
    }

    const borrar = async () => {
        // console.log(form);
        await borrarMeta(form.id);
        enviar({ tipo: 'borrar', id: form.id });
        navegar('/lista');
    }

    const cancelar = () => {
        navegar('/lista');
    }

    const onChange = (event, prop) => {
        setForm(estado => ({ ...estado, [prop]: event.target.value }));
    }

    useEffect(() => {
        const metaMemoria = estado.objetos[id];
        if (!id) return;
        if (!metaMemoria) return navegar('/404');
        setForm(metaMemoria);
    }, [id]);

    const { detalles, eventos, periodo, icono, completado, meta, plazo } = form;

    const frecuencias = ["dia", "semana", "mes", "anio"];
    const iconos = ["💻", "🏃", "📚", "✈️", "💵"]
    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input onChange={e => onChange(e, 'detalles')} value={detalles} className="input" type="text" placeholder="ej. 52 caminatas" />
                </label>
                <label className="label">
                    Con que frecuencia deseas cumplir tu meta?
                    <div className="flex mb-6">
                        <input onChange={e => onChange(e, 'eventos')} value={eventos} className="input mr-6" type="number" />
                        <select onChange={e => onChange(e, 'periodo')} value={periodo} className="input" name="" id="">
                            {frecuencias.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Cuantas veces deseas completar la meta?
                    <input onChange={e => onChange(e, 'meta')} value={meta} className="input" type="number" />
                </label>
                <label className="label">
                    Tienes una fecha limite?
                    <input onChange={e => onChange(e, 'plazo')} value={plazo} className="input" type="date" />
                </label>
                <label className="label">
                    Cuantas veces haz completado ya esta meta?
                    <input onChange={e => onChange(e, 'completado')} value={completado} className="input" type="number" />
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select onChange={e => onChange(e, 'icono')} value={icono} className="input" name="" id="">
                        {iconos.map(icono => <option key={icono} value={icono}>{icono}</option>)}
                    </select>
                </label>
            </form>
            <div className="botones">
                {
                    id ? (
                        <>
                            <button onClick={actualizar} className="boton boton--negro">Actualizar</button>
                            <button onClick={borrar} className="boton boton--rojo">Borrar</button>
                        </>
                    )
                        : <button onClick={crear} className="boton boton--negro">Crear</button>
                }
                <button onClick={cancelar} className="boton boton--gris">Cancelar</button>
            </div>
        </div>
    );
}