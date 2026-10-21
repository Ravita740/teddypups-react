import { Link, useSearchParams } from 'react-router-dom';
import PuppyCard from '../components/PuppyCard.jsx';
import { AVAILABLE, BREED_FILTERS, GONE } from '../data/puppies.js';
import { wa } from '../data/site.js';

const ORIGINS = [
  { key: '', label: 'All puppies' },
  { key: 'local', label: 'In Dubai' },
  { key: 'imported', label: 'Imported' },
];

export default function Puppies() {
  const [params, setParams] = useSearchParams();
  const origin = params.get('origin') || '';
  const breed = params.get('breed') || '';

  const set = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const list = AVAILABLE.filter(
    (p) => (!origin || p.origin === origin) && (!breed || p.breeds.includes(breed))
  );

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="hand">from Teddy's sketchbook</p>
          <h1>Available puppies</h1>
          <p className="lead">
            Every listing shows real photos of the actual puppy. Open a profile to see them all,
            then ask us about them on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap">
          <div className="filters">
            <div className="seg" role="group" aria-label="Where from">
              {ORIGINS.map((o) => (
                <button key={o.key} className={origin === o.key ? 'is-on' : ''} onClick={() => set('origin', o.key)}>
                  {o.label}
                </button>
              ))}
            </div>
            <ul className="chips" aria-label="Breed">
              <li><button className={!breed ? 'is-on' : ''} onClick={() => set('breed', '')}>Any breed</button></li>
              {BREED_FILTERS.map((b) => (
                <li key={b.slug}>
                  <button className={breed === b.slug ? 'is-on' : ''} onClick={() => set('breed', b.slug)}>{b.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {list.length ? (
            <div className="grid">
              {list.map((p) => <PuppyCard key={p.slug} puppy={p} />)}
            </div>
          ) : (
            <div className="empty">
              <h2>No puppies match just yet</h2>
              <p>New puppies arrive often, and we can source rare breeds on request.</p>
              <div className="row">
                <button className="btn btn--ghost" onClick={() => setParams({}, { replace: true })}>Clear filters</button>
                <a className="btn btn--wa" href={wa("Hi TeddyPups! I'm looking for a specific breed.")} target="_blank" rel="noopener noreferrer">
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2>Already gone home</h2>
              <p>These puppies have found their families.</p>
            </div>
            <Link to="/gone-home" className="link">See the puppies who've gone home</Link>
          </div>
          <div className="grid grid--sm">
            {GONE.slice(0, 5).map((p) => <PuppyCard key={p.slug} puppy={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
