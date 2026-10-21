import { useEffect } from 'react';
import { media } from '../data/site.js';

export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index];
  const prev = () => onChange((index - 1 + items.length) % items.length);
  const next = () => onChange((index + 1) % items.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  });

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button className="lightbox__x" onClick={onClose} aria-label="Close">×</button>
      <button className="lightbox__nav lightbox__nav--l" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">‹</button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={media(item.src)} alt="A happy TeddyPups family with their new puppy" />
        <figcaption>{item.caption || `${index + 1} / ${items.length}`}</figcaption>
      </figure>
      <button className="lightbox__nav lightbox__nav--r" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">›</button>
    </div>
  );
}
