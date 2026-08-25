import { servicios, whatsappUrl } from '../siteConfig';

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div data-reveal className="section-head">
        <div className="section-head__title">
          <span className="section-head__eyebrow">02 / SERVICIOS</span>
          <h2>
            Todo lo que
            <br />
            tu auto necesita
          </h2>
        </div>
        <p className="section-head__note">
          Un solo taller, nueve especialidades. Cada trabajo se cotiza antes de
          ejecutarse y se documenta al entregar.
        </p>
      </div>

      <div className="servicios__list">
        {servicios.map((s) => (
          <a
            key={s.n}
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="servicio-row"
          >
            <span className="servicio-row__n">{s.n}</span>
            <span className="servicio-row__nombre">{s.nombre}</span>
            <span className="servicio-row__desc">{s.desc}</span>
            <span className="servicio-row__arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
