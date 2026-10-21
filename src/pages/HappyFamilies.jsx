import { useState } from 'react';
import Lightbox from '../components/Lightbox.jsx';
import { HAPPY_PHOTOS, TESTIMONIAL } from '../data/content.js';
import { media } from '../data/site.js';

export default function HappyFamilies() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="hand">our wall of happy endings</p>
          <h1>Happy families</h1>
          <p className="lead">
            Nothing makes us happier than seeing our puppies in loving homes! Here are some
            beautiful moments shared by our amazing clients after welcoming their furry friends.
          </p>
          <p className="eyebrow">{HAPPY_PHOTOS.length} moments and counting</p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap">
          <blockquote className="quote">
            <p>“{TESTIMONIAL.quote}”</p>
            <cite>{TESTIMONIAL.by}</cite>
          </blockquote>

          <ul className="wall">
            {HAPPY_PHOTOS.map((p, n) => (
              <li key={p.src}>
                <button onClick={() => setOpen(n)} aria-label={`Open photo ${n + 1}`}>
                  <img src={media(p.src)} alt="A happy TeddyPups family with their new puppy" loading="lazy" />
                  {p.caption && <span>{p.caption}</span>}
                </button>
              </li>
            ))}
          </ul>
          <p className="hand center">every one of them was a Teddy Pup once</p>
        </div>
      </section>

      {open != null && (
        <Lightbox items={HAPPY_PHOTOS} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
