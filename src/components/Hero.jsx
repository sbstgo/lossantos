import ImageSlot from './ImageSlot';
import { whatsappUrl } from '../siteConfig';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__copy">
        <div data-reveal className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          <span>TALLER AUTOMOTRIZ · SANTIAGO</span>
        </div>

        <div className="hero__title-wrap">
          <h1 data-reveal data-reveal-delay="80">
            Precisión
            <br />
            alemana.
            <br />
            <span className="dim">
              Manos
              <br />
              chilenas.
            </span>
          </h1>
          <p data-reveal data-reveal-delay="160">
            Especialistas en BMW, Volvo, Audi y Mercedes-Benz. Mantención y reparación
            para todas las marcas, con diagnóstico previo, repuestos correctos y trabajo
            garantizado.
          </p>
        </div>

        <div data-reveal data-reveal-delay="240" className="hero__actions">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn--solid">
            <span className="dot" />
            Escribir por WhatsApp
          </a>
          <a href="#servicios" className="btn btn--outline">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="hero__media">
        <ImageSlot placeholder="Foto principal: auto en el box" className="hero__image" />
        <div className="hero__gradient" />
        <div className="hero__corner hero__corner--tr" />
        <div className="hero__corner hero__corner--bl" />
      </div>
    </section>
  );
}
