import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PuppyCard from '../components/PuppyCard.jsx';
import { AVAILABLE, BREED_FILTERS, displayName } from '../data/puppies.js';
import {
  FAQS, HOME_FAQ_COUNT, HOME_HAPPY, JOURNEY, SHOWROOM_PHOTOS, TESTIMONIAL, TRUST,
} from '../data/content.js';
import { media, wa } from '../data/site.js';

function Hero() {
  const slides = AVAILABLE.slice(0, 5);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hand">every puppy is family</p>
          <h1>Premium teacup <em>puppies</em> in Dubai</h1>
          <p className="lead">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed
            from trusted breeders worldwide.
          </p>
          <div className="row">
            <Link to="/puppies" className="btn btn--primary">View available puppies</Link>
            <a className="btn btn--wa" href={wa()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
          </div>
        </div>
        <div
          className="hero__show"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hero__frame">
            {slides.map((p, n) => (
              <Link
                key={p.slug}
                to={`/puppies/${p.slug}`}
                className={`hero__slide ${n === i ? 'is-on' : ''}`}
                tabIndex={n === i ? 0 : -1}
                aria-hidden={n !== i}
              >
                <img src={media(p.images[0])} alt={`${displayName(p)}, ${p.breed} puppy`} />
              </Link>
            ))}
          </div>
          <ul className="hero__tabs">
            {slides.map((p, n) => (
              <li key={p.slug}>
                <button className={n === i ? 'is-on' : ''} onClick={() => setI(n)}>
                  {displayName(p)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2>Meet the pups</h2>
              <p>Real puppies, real photos, looking for their families right now.</p>
            </div>
            <Link to="/puppies" className="link">See all available puppies</Link>
          </div>
          <div className="grid">
            {AVAILABLE.map((p, n) => <PuppyCard key={p.slug} puppy={p} index={n} />)}
          </div>
          <p className="center"><Link to="/puppies" className="btn btn--ghost">Meet them all</Link></p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <h2 className="center">Two ways to meet your puppy</h2>
          <div className="two">
            <article className="panel">
              <img src={media(SHOWROOM_PHOTOS[0])} alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom" loading="lazy" />
              <div>
                <p className="eyebrow">Puppies in Dubai</p>
                <h3>In our showroom</h3>
                <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
                <Link to="/puppies?origin=local" className="btn btn--primary">Meet local puppies</Link>
              </div>
            </article>
            <article className="panel panel--import">
              <div className="panel__flight" aria-hidden="true">Korea ✈ Dubai</div>
              <div>
                <p className="eyebrow">Imported for you</p>
                <h3>Exclusive Korean teacup puppies, delivered</h3>
                <p>Order from the world's most reputable breeders and let us handle the import.</p>
                <Link to="/puppies?origin=imported" className="btn btn--primary">See imported puppies</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <h2>Your puppy journey</h2>
              <p>A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.</p>
            </div>
            <Link to="/how-it-works" className="link">How it works</Link>
          </div>
          <ol className="steps">
            {JOURNEY.map((s, n) => (
              <li key={s.t}>
                <span className="steps__n">{n + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap chat">
          <div className="chat__window">
            <div className="chat__bar"><strong>TeddyPups U.A.E.</strong> <span className="online">online</span></div>
            <p className="chat__bubble chat__bubble--me">Hi TeddyPups! I'd love to know more about your puppies.</p>
            <p className="chat__bubble">Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.</p>
            <ul className="chips">
              {BREED_FILTERS.map((b) => (
                <li key={b.slug}><Link to={`/puppies?breed=${b.slug}`}>{b.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="chat__side">
            <div className="polaroids">
              {SHOWROOM_PHOTOS.map((s, n) => (
                <img key={s} src={media(s)} alt="" loading="lazy" style={{ '--r': `${(n - 1.5) * 4}deg` }} />
              ))}
            </div>
            <p>Our team will share real photos, health details, and all necessary information directly on WhatsApp.</p>
            <p>Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.</p>
            <a className="btn btn--wa" href={wa()} target="_blank" rel="noopener noreferrer">Say hello on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="hand center">puppy passport</p>
          <h2 className="center">Why families trust TeddyPups</h2>
          <ul className="trust">
            {TRUST.map((t) => (
              <li key={t.t}><h3>{t.t}</h3><p>{t.d}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <h2 className="center">Happy families &amp; puppies</h2>
          <p className="center lead">
            We are truly honored to see our puppies become cherished members of loving families.
            These heartwarming moments have been shared by our valued clients who welcomed a Teddy
            Pup into their homes and hearts.
          </p>
          <blockquote className="quote">
            <p>“{TESTIMONIAL.quote}”</p>
            <cite>{TESTIMONIAL.by}</cite>
          </blockquote>
          <ul className="mosaic">
            {HOME_HAPPY.map((p) => (
              <li key={p.src}>
                <img src={media(p.src)} alt="A happy TeddyPups family with their new puppy" loading="lazy" />
                <span>{p.caption}</span>
              </li>
            ))}
          </ul>
          <p className="center"><Link to="/happy-families" className="btn btn--ghost">See every happy family</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <div className="section__head">
            <h2>Questions, answered</h2>
            <Link to="/faq" className="link">Read all questions</Link>
          </div>
          <dl className="qa">
            {FAQS.slice(0, HOME_FAQ_COUNT).map(([q, a]) => (
              <div key={q}><dt>{q}</dt><dd>{a}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta__grid">
          <div>
            <h2>Ready to meet your new best friend?</h2>
            <p>
              Bring home a healthy, happy teacup or designer puppy with expert guidance every step
              of the way. We help you find the right match and ensure a smooth, safe delivery
              across the UAE.
            </p>
            <div className="row">
              <a className="btn btn--wa" href={wa()} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
              <Link to="/contact" className="btn btn--ghost">Visit &amp; contact</Link>
            </div>
          </div>
          <figure className="cta__pic">
            <img src={media(AVAILABLE[0].images[0])} alt="Max, waiting inside" loading="lazy" />
            <figcaption className="hand">welcome home</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
