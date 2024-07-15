import './App.css'
import { Layout, Modal, NoEncontrado } from './componentes/compartidos'
import { Route, Routes } from 'react-router-dom'
import { Lista } from './componentes/lista'
import { Detalles } from './componentes/nueva'
import { useContext, useEffect } from 'react'
import { Contexto, pedirMetas } from './servicios'

function App() {

  const [, enviar] = useContext(Contexto);

  useEffect(() => {
    async function fetchData() {
      const metas = await pedirMetas();
      enviar({ tipo: 'colocar', metas });
    }
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path='/lista' element={<Lista />}>
          <Route path='/lista/:id' element={<Modal><Detalles /></Modal>} />
        </Route>
        <Route path='/nueva' element={<Detalles />} />
      </Route>
      <Route path='*' element={<NoEncontrado />} />
    </Routes>
  )
}

export default App
