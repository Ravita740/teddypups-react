import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm.jsx';
import NotFound from './NotFound.jsx';
import { AVAILABLE, bySlug, displayName } from '../data/puppies.js';
import { EVERY_PUP_COMES, IMPORT_STEPS, LOCAL_STEPS } from '../data/content.js';
import { media, wa } from '../data/site.js';

const genderLabel = (g) => (g === 'boy' ? 'Boy' : g === 'girl' ? 'Girl' : 'Boy & girl');

export default function PuppyDetail() {
  const { slug } = useParams();
  const puppy = bySlug(slug);
  const [shot, setShot] = useState(0);

  useEffect(() => setShot(0), [slug]);
  useEffect(() => {
    if (puppy) document.title = `${displayName(puppy)}, ${puppy.breed} puppy | TeddyPups U.A.E.`;
  }, [puppy]);

  if (!puppy) return <NotFound />;

  const gone = puppy.status === 'gone';
  const name = displayName(puppy);
  const label = puppy.name ? `${puppy.name} (${puppy.breed})` : `${puppy.breed} (${puppy.gender})`;
  const images = puppy.images;
  const imported = puppy.origin === 'imported';
  const where = gone ? puppy.where : imported ? 'Imported for you' : 'In our Dubai showroom';

  const idx = AVAILABLE.findIndex((p) => p.slug === slug);
  const prev = idx >= 0 ? AVAILABLE[(idx - 1 + AVAILABLE.length) % AVAILABLE.length] : null;
  const next = idx >= 0 ? AVAILABLE[(idx + 1) % AVAILABLE.length] : null;

  const steps = imported ? IMPORT_STEPS : LOCAL_STEPS;
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <article className="wrap detail">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to={gone ? '/gone-home' : '/puppies'}>{gone ? 'Gone home' : 'Available puppies'}</Link> / <span>{name}</span>
      </nav>

      <section className="detail__top">
        <div className="gallery">
          <p className="hand">1 · hello, it's me</p>
          <div className="gallery__main">
            <img src={media(images[shot])} alt={`${name}, ${puppy.breed} puppy`} />
            {images.length > 1 && (
              <>
                <button className="gallery__nav gallery__nav--l" onClick={() => setShot((shot - 1 + images.length) % images.length)} aria-label="Previous photo">‹</button>
                <button className="gallery__nav gallery__nav--r" onClick={() => setShot((shot + 1) % images.length)} aria-label="Next photo">›</button>
                <span className="gallery__count">{shot + 1} / {images.length}</span>
              </>
            )}
          </div>
          {images.length > 1 && (
            <ul className="thumbs">
              {images.map((src, n) => (
                <li key={src}>
                  <button className={n === shot ? 'is-on' : ''} onClick={() => setShot(n)} aria-label={`Show photo ${n + 1}`}>
                    <img src={media(src)} alt="" />
                    {puppy.video && n > 0 && <span className="thumbs__play">▶</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {puppy.video && (
            <p className="note">
              ▶ We have a video of {name}.{' '}
              <a href={wa(`Hi TeddyPups! Could you send me the video of ${label}? ${url}`)} target="_blank" rel="noopener noreferrer">
                Ask us for it on WhatsApp
              </a>
            </p>
          )}
        </div>

        <div className="facts">
          <span className={`badge badge--lg ${gone ? 'badge--gone' : ''}`}>{gone ? 'gone home ♥' : 'Available'}</span>
          <h1>{name}</h1>
          {puppy.name && <p className="lead">{puppy.breed}</p>}
          <dl className="facts__list">
            <div><dt>Breed</dt><dd>{puppy.breed}</dd></div>
            <div><dt>Boy or girl</dt><dd>{genderLabel(puppy.gender)}</dd></div>
            {puppy.age && <div><dt>Age</dt><dd>{puppy.age}</dd></div>}
            <div><dt>Where</dt><dd>{where}</dd></div>
          </dl>
          {gone ? (
            <>
              <p>{name} has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.</p>
              <div className="row">
                <Link to="/puppies" className="btn btn--primary">See available puppies</Link>
                <a className="btn btn--wa" href={wa(`Hi TeddyPups! I'd love a puppy like ${label}.`)} target="_blank" rel="noopener noreferrer">Find me one like {name}</a>
              </div>
            </>
          ) : (
            <div className="row">
              <a
                className="btn btn--wa"
                href={wa(`Hi TeddyPups! I'm interested in ${puppy.name ? `${puppy.name}, the ${puppy.breed}` : `the ${puppy.breed}`}: ${url}`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask about {name} on WhatsApp
              </a>
              <Link to={`#enquire-${slug}`} className="btn btn--ghost">Send an enquiry</Link>
            </div>
          )}
        </div>
      </section>

      <section className="detail__block">
        <p className="hand">2 · what comes with {name}</p>
        <h2>Every Teddy Pup comes</h2>
        <ul className="ticks">
          {EVERY_PUP_COMES.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      {!gone && (
        <section className="detail__block">
          <p className="hand">3 · the way home</p>
          <h2>{imported ? 'Coming home from abroad' : 'Coming home from our showroom'}</h2>
          <ol className="steps steps--4">
            {steps.map((s, n) => (
              <li key={s.t}><span className="steps__n">{n + 1}</span><h3>{s.t}</h3><p>{s.d}</p></li>
            ))}
          </ol>
        </section>
      )}

      {!gone && (
        <section className="detail__block detail__form" id={`enquire-${slug}`}>
          <p className="hand">4 · dear TeddyPups…</p>
          <h2>Ask about {name}</h2>
          <p>Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.</p>
          <EnquiryForm puppyLabel={label} />
        </section>
      )}

      {prev && next && (
        <nav className="pager" aria-label="More puppies">
          <Link to={`/puppies/${prev.slug}`}>
            <img src={media(prev.images[0])} alt="" />
            <span><small>Previous pup</small><strong>{displayName(prev)}</strong></span>
          </Link>
          <Link to={`/puppies/${next.slug}`} className="pager__next">
            <span><small>Next pup</small><strong>{displayName(next)}</strong></span>
            <img src={media(next.images[0])} alt="" />
          </Link>
        </nav>
      )}
    </article>
  );
}
