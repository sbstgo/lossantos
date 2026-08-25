// Datos de contacto y negocio centralizados — edita aquí para actualizar todo el sitio.
export const site = {
  nombre: 'Los Santos',
  rubro: 'Taller Automotriz',
  ciudad: 'Santiago',
  pais: 'Chile',
  telefono: '+56 9 5762 4326',
  telefonoTel: '+56957624326',
  whatsappNumero: '56957624326',
  whatsappTexto: 'Hola Los Santos, quiero cotizar un servicio',
  instagramUsuario: '@lossantos.chile',
  instagramUrl: 'https://instagram.com/lossantos.chile',
  horario: 'Lun–Vie · 9:00–18:00',
  horarioLargo: { dias: 'Lunes a viernes', horas: '9:00 – 18:00' },
  direccion: 'Por confirmar, Santiago',
};

export const whatsappUrl = (texto) =>
  `https://wa.me/${site.whatsappNumero}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const marcas = ['BMW', 'VOLVO', 'AUDI', 'MERCEDES-BENZ'];

export const servicios = [
  { n: '01', nombre: 'Mecánica general', desc: 'Reparación integral de motor, culata, distribución y sistemas asociados.' },
  { n: '02', nombre: 'Diagnóstico computarizado', desc: 'Lectura de módulos, códigos de falla y telemetría en vivo con scanner de marca.' },
  { n: '03', nombre: 'Frenos y suspensión', desc: 'Discos, pastillas, amortiguación, bujes y revisión de geometría.' },
  { n: '04', nombre: 'Afinamiento de motor', desc: 'Puesta a punto, bujías, inyectores, filtros y limpieza de admisión.' },
  { n: '05', nombre: 'Aire acondicionado', desc: 'Carga de gas, detección de fugas, compresor y sanitización del sistema.' },
  { n: '06', nombre: 'Neumáticos y alineación', desc: 'Montaje, balanceo y alineación computarizada según ficha de fábrica.' },
  { n: '07', nombre: 'Eléctrico automotriz', desc: 'Alternador, motor de partida, cableado y unidades de control.' },
  { n: '08', nombre: 'Transmisión', desc: 'Cambio de aceite, embrague, caja manual y automática.' },
  { n: '09', nombre: 'Mantención preventiva', desc: 'Pautas por kilometraje según especificación del fabricante.' },
];

export const galeria = [
  { id: 'g1', placeholder: 'Trabajo 01 — coloca g1.jpg en src/assets/img/photos/', span: 'tall' },
  { id: 'g2', placeholder: 'Trabajo 02 (horizontal destacada) — g2.jpg', span: 'wide-tall' },
  { id: 'g3', placeholder: 'Trabajo 03 — g3.jpg', span: 'normal' },
  { id: 'g4', placeholder: 'Trabajo 04 — g4.jpg', span: 'tall' },
  { id: 'g5', placeholder: 'Trabajo 05 — g5.jpg', span: 'normal' },
  { id: 'g6', placeholder: 'Trabajo 06 (panorámica) — g6.jpg', span: 'wide' },
];
