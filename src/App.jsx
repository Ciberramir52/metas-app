import './App.css'
import { Layout, Modal, NoEncontrado } from './componentes/compartidos'
import { Route, Routes } from 'react-router-dom'
import { Lista } from './componentes/lista'
import { Detalles } from './componentes/nueva'

function App() {

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
