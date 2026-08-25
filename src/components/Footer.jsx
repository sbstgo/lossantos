import logoWhite from '../assets/img/logo-white.png';
import { site, whatsappUrl } from '../siteConfig';

const NAV = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <img src={logoWhite} alt={site.nombre} height={64} />
          <p>
            Taller automotriz especialista en BMW, Volvo, Audi y Mercedes-Benz.
            Mantención para todas las marcas.
          </p>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">NAVEGACIÓN</span>
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="footer__col">
          <span className="footer__col-title">CONTACTO</span>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.telefono}
          </a>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram {site.instagramUsuario}
          </a>
          <span className="is-dim">{site.ciudad}, {site.pais}</span>
        </div>

        <div className="footer__col">
          <span className="footer__col-title">HORARIOS</span>
          <span>
            {site.horarioLargo.dias}
            <br />
            {site.horarioLargo.horas}
          </span>
          <span className="is-dim">
            Sábado y domingo
            <br />
            Cerrado
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {site.nombre.toUpperCase()} · {site.rubro.toUpperCase()}</span>
        <span>{site.ciudad.toUpperCase()} · {site.pais.toUpperCase()}</span>
      </div>
    </footer>
  );
}
