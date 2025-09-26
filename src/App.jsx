import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css'
import Home from './componentes/home/index'
import Informativo from './componentes/informativo/index'
import Favoritos from './componentes/favoritos/index'
import Mapa from './componentes/mapa/index'
import Detalles from './componentes/detalle/index'

function App() {

  return (
    <>
    <Router>

  <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativo">Informativo</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/detalle">Detalles</Link>
  </nav>


      <Routes>
          <Route path="/"element={<Home /> } />
          <Route path="/informativo" element={<Informativo /> } />
          <Route path="/mapa" element={<Mapa /> } />
          <Route path="/favoritos" element={<Favoritos /> } />
          <Route path="/detalle/:depto/:municipio" element={<Detalles /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
