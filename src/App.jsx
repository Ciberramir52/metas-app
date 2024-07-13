import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Encabezado, Pie, Principal } from './componentes/compartidos/'
import { Lista } from './componentes/lista'
import Detalles from './componentes/nueva'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Encabezado />
      <Principal>
        {/* <Lista /> */}
        <Detalles />
      </Principal>
      <Pie />
    </>
  )
}

export default App
