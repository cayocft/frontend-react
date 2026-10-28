import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { About } from './page/About.jsx'

function Home() {
  return (
    <div>
      <h1>Página "Inicio"</h1>
      <p>Este es el componente principal de la aplicación</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
