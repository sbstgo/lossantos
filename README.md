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

## Poner las fotos reales

No hace falta tocar código. Solo copia el archivo con el nombre correcto dentro de
`src/assets/img/photos/` y aparece automáticamente (formatos: jpg, jpeg, png, webp):

| Foto | Nombre de archivo |
|---|---|
| Hero (portada) | `hero.jpg` |
| Nosotros (equipo / box) | `nosotros.jpg` |
| Galería, foto 1 | `g1.jpg` |
| Galería, foto 2 (horizontal destacada) | `g2.jpg` |
| Galería, foto 3 | `g3.jpg` |
| Galería, foto 4 | `g4.jpg` |
| Galería, foto 5 | `g5.jpg` |
| Galería, foto 6 (panorámica) | `g6.jpg` |

Mientras un nombre no exista, esa sección sigue mostrando el recuadro de marcador de
posición. Con `npm run dev` corriendo, la foto aparece apenas la guardas en la
carpeta — no hace falta reiniciar nada.

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
