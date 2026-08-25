import { site, whatsappUrl } from '../siteConfig';

export default function Contacto() {
  const info = [
    { label: 'TELÉFONO', value: site.telefono, href: `tel:${site.telefonoTel}` },
    { label: 'INSTAGRAM', value: site.instagramUsuario, href: site.instagramUrl, external: true },
    { label: 'HORARIO', value: site.horario },
    { label: 'DIRECCIÓN', value: site.direccion, dim: true },
  ];

  return (
    <section id="contacto" className="contacto">
      <div className="contacto__copy">
        <span data-reveal className="section-head__eyebrow">05 / CONTACTO</span>
        <h2 data-reveal data-reveal-delay="60">
          Cuéntanos qué
          <br />
          le pasa a tu auto
        </h2>
        <p data-reveal data-reveal-delay="110">
          Escríbenos por WhatsApp con la marca, el modelo, el año y lo que estás
          notando. Te respondemos con los pasos a seguir y una estimación.
        </p>

        <a
          data-reveal
          data-reveal-delay="160"
          href={whatsappUrl(site.whatsappTexto)}
          target="_blank"
          rel="noopener noreferrer"
          className="contacto__whatsapp"
        >
          <span className="contacto__whatsapp-text">
            <span className="contacto__whatsapp-label">WHATSAPP DIRECTO</span>
            <span className="contacto__whatsapp-number">{site.telefono}</span>
          </span>
          <span className="contacto__whatsapp-arrow">→</span>
        </a>

        <div data-reveal data-reveal-delay="200" className="contacto__grid">
          {info.map((item) => (
            <div key={item.label} className="contacto__cell">
              <span className="contacto__cell-label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="contacto__cell-value"
                >
                  {item.value}
                </a>
              ) : (
                <span className={`contacto__cell-value ${item.dim ? 'is-dim' : ''}`}>{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="contacto__map">
        <div className="contacto__map-frame">
          <span className="section-head__eyebrow">GOOGLE MAPS</span>
          <span className="contacto__map-note">
            Aquí va el mapa incrustado. Envíame la dirección exacta del taller y lo dejo
            funcionando.
          </span>
        </div>
      </div>
    </section>
  );
}
