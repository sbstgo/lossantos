import { useEffect, useState } from 'react';
import logoWhite from '../assets/img/logo-white.png';
import { site, whatsappUrl } from '../siteConfig';

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <a href="#inicio" className="site-header__logo">
          <img src={logoWhite} alt={site.nombre} />
        </a>

        <nav className="site-header__nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <span className="site-header__phone">{site.telefono}</span>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--solid"
          >
            <span className="dot" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="burger"
          aria-label="Menú"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__top">
            <img src={logoWhite} alt={site.nombre} height={34} />
            <button
              type="button"
              className="mobile-menu__close"
              aria-label="Cerrar"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>
          <nav className="mobile-menu__nav">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__bottom">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--solid btn--block"
            >
              <span className="dot" />
              Escribir por WhatsApp
            </a>
            <span className="mobile-menu__hours">
              {site.telefono} · {site.horario.toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
