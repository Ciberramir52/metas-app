export function Detalles() {
    const frecuencias = ["dia", "semana", "mes", "anio"];
    const iconos = ["💻", "🏃", "📚", "✈️", "💵"]
    return (
        <div className="tarjeta">
            <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input className="input" type="text" placeholder="ej. 52 caminatas" />
                </label>
                <label className="label">
                    Con que frecuencia deseas cumplir tu meta?
                    <div className="flex mb-6">
                        <input className="input mr-6" type="number" />
                        <select className="input" name="" id="">
                            {frecuencias.map(opcion => <option key={opcion} value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    Cuantas veces deseas completar la meta?
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    Tienes una fecha limite?
                    <input className="input" type="date" />
                </label>
                <label className="label">
                    Cuantas veces haz completado ya esta meta?
                    <input className="input" type="number" />
                </label>
                <label className="label"> 
                    Escoge el icono para la meta
                    <select className="input" name="" id="">
                        {iconos.map(icono => <option key={icono} value={icono}>{icono}</option>)}
                    </select>
                </label>
            </form>
            <div className="botones">
                <button className="boton boton--negro">Cancelar</button>
                <button className="boton boton--gris">Crear</button>
            </div>
        </div>
    );
}