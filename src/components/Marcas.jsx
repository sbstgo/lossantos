import { marcas } from '../siteConfig';

const items = [...marcas, 'Y TODAS LAS DEMÁS MARCAS'];
const track = [...items, ...items];

export default function Marcas() {
  return (
    <div className="marcas">
      <span className="marcas__label">ESPECIALISTAS EN</span>
      <div className="marcas__viewport">
        <div className="marcas__track">
          {track.map((m, i) => (
            <span key={i} className={m.includes('DEMÁS') ? 'marcas__item marcas__item--dim' : 'marcas__item'}>
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
