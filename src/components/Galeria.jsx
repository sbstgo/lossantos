import { useEffect, useState } from 'react';
import ImageSlot from './ImageSlot';
import { galeria } from '../siteConfig';
import { photos } from '../photos';

const spanClass = {
  tall: 'galeria__item--tall',
  wide: 'galeria__item--wide',
  'wide-tall': 'galeria__item--wide-tall',
  normal: '',
};

export default function Galeria() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenIndex(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const open = openIndex !== null ? galeria[openIndex] : null;

  return (
    <section id="galeria" className="galeria">
      <div data-reveal className="section-head">
        <div className="section-head__title">
          <span className="section-head__eyebrow">04 / GALERÍA</span>
          <h2>Trabajos realizados</h2>
        </div>
        <span className="section-head__hint">Haz clic en cualquier imagen para ampliarla</span>
      </div>

      <div className="galeria__grid">
        {galeria.map((item, i) => (
          <button
            key={item.id}
            type="button"
            data-reveal
            data-reveal-delay={(i % 3) * 60}
            className={`galeria__item ${spanClass[item.span] || ''}`}
            onClick={() => setOpenIndex(i)}
          >
            <ImageSlot src={photos[item.id]} alt={item.placeholder} placeholder={item.placeholder} className="galeria__image" />
          </button>
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpenIndex(null)}>
          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <ImageSlot src={photos[open.id]} alt={open.placeholder} placeholder={open.placeholder} className="lightbox__image" />
          </div>
          <button
            type="button"
            className="lightbox__close"
            aria-label="Cerrar"
            onClick={() => setOpenIndex(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
