import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="bg-black min-h-screen relative selection:bg-[#c5a880] selection:text-black">
      <Routes>
        {/* Ruta principal (inicio) */}
        <Route path="/" element={<Home />} />

        {/* Si alguien escribe una ruta que no existe, muestra el 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}