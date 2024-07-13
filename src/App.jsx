import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Encabezado, Pie, Principal } from './componentes/compartidos/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Encabezado />
      <Principal />
      <Pie />
    </>
  )
}

export default App
