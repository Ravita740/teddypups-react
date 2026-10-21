import { Link } from 'react-router-dom';
import { GONE, displayName } from '../data/puppies.js';
import { media } from '../data/site.js';

export default function GoneHome() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="hand">tickets home</p>
          <h1>Gone home</h1>
          <p className="lead">
            Every puppy here has already joined a loving family. Looking for one just like them?
            Tell us — we'll help you find your match.
          </p>
          <Link to="/puppies" className="btn btn--primary">See available puppies</Link>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap">
          <ul className="tickets">
            {GONE.map((p) => (
              <li key={p.slug}>
                <Link to={`/puppies/${p.slug}`} className="ticket">
                  <img src={media(p.images[0])} alt={`${displayName(p)}, ${p.gender === 'boy' ? 'male' : 'female'} ${p.breed} puppy`} loading="lazy" />
                  <div className="ticket__body">
                    <small>one ticket home</small>
                    <strong>{displayName(p)}</strong>
                    <span>{p.breed}, {p.gender}</span>
                    <span className="ticket__where">{p.where}</span>
                    <span className="ticket__stub">home ♥ <em>admit one</em></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
