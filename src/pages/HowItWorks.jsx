import { Link } from 'react-router-dom';
import {
  DELIVERY, IMPORT_FLOW, LOCAL_FLOW, PROMISE, WHY,
} from '../data/content.js';
import { wa } from '../data/site.js';

function Steps({ items }) {
  return (
    <ol className="steps steps--4">
      {items.map((s, n) => (
        <li key={s.t}>
          <span className="steps__n">Step {n + 1}</span>
          <h4>{s.t}</h4>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

const TOC = [
  ['#two-ways', 'Two ways home'],
  ['#promise', 'Our premium puppy promise'],
  ['#delivery', 'Delivery & collection'],
  ['#why', 'Why choose us'],
];

export default function HowItWorks() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>How it works</h1>
          <p className="lead">
            Whether you choose to visit us locally or order a premium breed from overseas,
            TeddyPups is here to make the experience unforgettable.
          </p>
          <ol className="toc">
            {TOC.map(([href, label], n) => (
              <li key={href}><Link to={href}><b>{n + 1}</b> {label}</Link></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="two-ways">
        <div className="wrap">
          <p className="hand center">choose your way</p>
          <h2 className="center">Two ways home</h2>

          <div className="way">
            <p className="eyebrow">In Dubai · meet in person</p>
            <h3>Meet your puppy in person</h3>
            <p>
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy
              face-to-face. We source healthy, well-socialized puppies from trusted local breeders,
              ensuring they're raised with care, proper nutrition, and veterinary checks.
            </p>
            <p className="pin">📍 Downtown Dubai</p>
            <Steps items={LOCAL_FLOW} />
          </div>

          <div className="way way--import">
            <p className="eyebrow">Imported · order upon request</p>
            <h3>Order upon request</h3>
            <p>
              Looking for a truly exceptional companion? Our Order Upon Request service gives you
              access to some of the world's most sought-after teacup breeds — ethically sourced from
              the most reputable, certified breeders across Europe, Korea, and beyond.
            </p>
            <p>
              From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the
              world's finest puppies to Dubai, just for you.
            </p>
            <p className="pin">Europe · Korea ✈ Dubai</p>
            <Steps items={IMPORT_FLOW} />
          </div>
        </div>
      </section>

      <section className="section section--tint" id="promise">
        <div className="wrap">
          <p className="hand center">puppy passport</p>
          <h2 className="center">Our premium puppy promise</h2>
          <ul className="trust trust--3">
            {PROMISE.map((t) => <li key={t.t}><h3>{t.t}</h3><p>{t.d}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="section" id="delivery">
        <div className="wrap">
          <h2 className="center">Delivery &amp; collection</h2>
          <p className="center lead">
            From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels
            comfortably and arrives safely.
          </p>
          <ul className="trust">
            {DELIVERY.map((t) => <li key={t.t}><h3>{t.t}</h3><p>{t.d}</p></li>)}
          </ul>
          <p className="hand center">Korea ✈ Dubai</p>
        </div>
      </section>

      <section className="section section--tint" id="why">
        <div className="wrap">
          <h2 className="center">Why choose us</h2>
          <p className="center lead">
            We're here to help you find a new family member. From the moment you visit our site to
            the joyful day your puppy arrives at your door, we're with you every step of the way. Our
            mission is to make the entire adoption process smooth, transparent, and full of love.
          </p>
          <ul className="trust trust--3">
            {WHY.map((t) => <li key={t.t}><h3>{t.t}</h3><p>{t.d}</p></li>)}
          </ul>
          <h3 className="center">Unique and high quality puppies</h3>
          <p className="center lead">
            When you choose TeddyPups, you can trust that you're getting a puppy of the highest
            quality. We also provide guidance and support to new pet owners, offering advice on
            training, nutrition, and general care to ensure a smooth transition for you and your new
            furry friend.
          </p>
          <div className="row row--center">
            <a className="btn btn--wa" href={wa()} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp</a>
            <Link to="/puppies" className="btn btn--primary">See available puppies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
