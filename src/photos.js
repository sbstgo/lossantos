// Carga automática de fotos: cualquier imagen puesta en src/assets/img/photos/
// queda disponible aquí por su nombre de archivo (sin extensión), sin tocar código.
// Ej: src/assets/img/photos/hero.jpg -> photos['hero']
const modules = import.meta.glob('./assets/img/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

export const photos = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '');
    return [name, url];
  })
);
