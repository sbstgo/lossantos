# Los Santos — Taller Automotriz

Sitio web de una página para Los Santos, taller automotriz especialista en BMW, Volvo,
Audi y Mercedes-Benz (Santiago, Chile). Construido en React + Vite, listo para
desplegar en Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Estructura

- `src/siteConfig.js` — todos los datos editables del negocio: teléfono, WhatsApp,
  Instagram, horario, dirección, lista de servicios y textos de la galería. Edita
  este archivo para actualizar el contenido sin tocar los componentes.
- `src/components/` — un componente por sección (Header, Hero, Marcas, Servicios,
  Nosotros, Galería, Contacto, Footer).
- `src/assets/img/` — logos. `logo-white.png` para fondos oscuros, `logo-black.png`
  para fondos claros.

## Reemplazar las fotos de marcador de posición

El hero, la sección "Nosotros" y los 6 espacios de la galería están usando
`ImageSlot`, un componente que muestra un recuadro con texto mientras no haya foto
real. Para poner una foto:

1. Copia la imagen a `src/assets/img/` (ej. `hero.jpg`).
2. Impórtala en el componente correspondiente y pásala como prop `src` a
   `<ImageSlot>`:

   ```jsx
   import hero from '../assets/img/hero.jpg';
   <ImageSlot src={hero} alt="Auto en el box" className="hero__image" />
   ```

Los 6 slots de la galería están definidos en el arreglo `galeria` de
`src/siteConfig.js` — puedes añadir ahí una propiedad `src` e importarla en
`Galeria.jsx`.

## El mapa de Google Maps

La sección de contacto tiene un marcador de posición donde va el mapa. Cuando se
confirme la dirección del taller, reemplaza el bloque `.contacto__map` en
`Contacto.jsx` por un `<iframe>` de Google Maps embed.

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para servir estáticamente.

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En [vercel.com](https://vercel.com), "Add New Project" → importa el repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Cada push a la rama principal genera un nuevo deploy automáticamente.
