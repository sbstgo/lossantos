import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marcas from './components/Marcas';
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  useEffect(() => {
    document.title = 'Los Santos — Taller Automotriz · Santiago';
  }, []);

  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Marcas />
        <Servicios />
        <Nosotros />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
