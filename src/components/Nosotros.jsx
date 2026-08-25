import ImageSlot from './ImageSlot';
import { site } from '../siteConfig';
import { photos } from '../photos';

const stats = [
  { value: '04', label: 'Marcas especialistas' },
  { value: '09', label: 'Especialidades' },
  { value: '100%', label: 'Presupuesto previo' },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__media">
        <ImageSlot
          src={photos.nosotros}
          alt="Equipo de Los Santos"
          placeholder="Foto del equipo o del box de trabajo. Coloca nosotros.jpg en src/assets/img/photos/"
          className="nosotros__image"
        />
      </div>

      <div className="nosotros__copy">
        <span data-reveal className="section-head__eyebrow">03 / NOSOTROS</span>
        <h2 data-reveal data-reveal-delay="60">
          El taller que
          <br />
          tu auto merece
        </h2>
        <p data-reveal data-reveal-delay="120">
          {site.nombre} nació de una idea simple: tratar cada vehículo como si fuera
          propio. Trabajamos con procedimientos de marca, herramientas específicas y
          repuestos que cumplen especificación de fábrica.
        </p>
        <p data-reveal data-reveal-delay="160">
          Te explicamos qué tiene tu auto, qué es urgente y qué puede esperar. Sin
          trabajos que no pediste y sin sorpresas en la boleta.
        </p>

        <div data-reveal data-reveal-delay="220" className="nosotros__stats">
          {stats.map((s) => (
            <div key={s.label} className="nosotros__stat">
              <span className="nosotros__stat-value">{s.value}</span>
              <span className="nosotros__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
