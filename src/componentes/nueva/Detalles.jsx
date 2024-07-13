function Detalles() {
    const frecuencias = ["dia", "semana", "mes", "anio"];
    const iconos = ["💻", "🏃", "📚", "✈️", "💵"]
    return (
        <div>
            <form action="">
                <label>
                    Describe tu meta
                    <input type="text" placeholder="ej. 52 caminatas" />
                </label>
                <label>
                    Con que frecuencia deseas cumplir tu meta?
                    <div>
                        <input type="number" />
                        <select name="" id="">
                            {frecuencias.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    Cuantas veces deseas completar la meta?
                    <input type="number" />
                </label>
                <label>
                    Tienes una fecha limite?
                    <input type="date" />
                </label>
                <label>
                    Cuantas veces haz completado ya esta meta?
                    <input type="number" />
                </label>
                <label htmlFor="">
                    Escoge el icono para la meta
                    <select name="" id="">
                        {iconos.map(icono => <option value={icono}>{icono}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Cancelar</button>
                <button>Crear</button>
            </div>
        </div>
    );
}

export default Detalles;