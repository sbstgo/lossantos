export default function ImageSlot({ src, alt = '', placeholder, className = '', style }) {
  if (src) {
    return <img src={src} alt={alt} className={`img-slot img-slot--filled ${className}`} style={style} />;
  }
  return (
    <div className={`img-slot img-slot--empty ${className}`} style={style}>
      <span>{placeholder}</span>
    </div>
  );
}
