import { useState } from 'react';
import { AVAILABLE } from '../data/puppies.js';
import { SHOWROOM_PHOTOS } from '../data/content.js';
import { SITE, media, wa } from '../data/site.js';
import { submitLead } from '../lib/submit.js';

const optionLabel = (p) =>
  p.name ? `${p.name} (${p.breed}, ${p.gender})` : `${p.breed} (${p.gender})`;

export default function Contact() {
  const [state, setState] = useState('idle');
  const [how, setHow] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (f.get('website')) return;
    setState('sending');
    try {
      const res = await submitLead({
        puppy: f.get('puppy'),
        name: f.get('name').trim(),
        phone: f.get('phone').trim(),
        email: f.get('email').trim(),
        area: f.get('area').trim(),
        message: f.get('message').trim(),
      });
      setHow(res);
      setState('done');
      form.reset();
    } catch {
      setState('error');
    }
  };

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Get in touch with us</h1>
          <p className="lead">
            Have questions about our puppies or adoption process? Fill out the form, and our team
            will get back to you promptly. Whether ready to adopt or just seeking info, we'd love
            to hear from you!
          </p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap contact">
          <div className="letter">
            {state === 'done' ? (
              <div className="notice notice--ok" role="status">
                <strong>Your letter is posted!</strong>{' '}
                {how === 'whatsapp'
                  ? 'We opened WhatsApp with your details — just press send and our team will reply.'
                  : 'Our team will get back to you promptly.'}
                <p><button className="link" onClick={() => setState('idle')}>Write another letter</button></p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <p className="letter__hi">Dear TeddyPups,</p>
                <p className="letter__line">
                  my name is{' '}
                  <input name="name" required aria-label="Your name" placeholder="your name" autoComplete="name" />
                  , and you can reach me on{' '}
                  <input name="phone" required type="tel" aria-label="Phone or WhatsApp" placeholder="phone / WhatsApp" autoComplete="tel" />{' '}
                  or by email at{' '}
                  <input name="email" type="email" aria-label="Email (optional)" placeholder="email (optional)" autoComplete="email" />.
                </p>
                <p className="letter__line">
                  I live in{' '}
                  <input name="area" aria-label="Your area" placeholder="your area" />, and I'm curious about{' '}
                  <select name="puppy" aria-label="Puppy you're interested in (optional)" defaultValue="">
                    <option value="">any puppy (not sure yet)</option>
                    {AVAILABLE.map((p) => (
                      <option key={p.slug} value={optionLabel(p)}>{optionLabel(p)}</option>
                    ))}
                  </select>
                  .
                </p>
                <label className="letter__msg">Your message (optional)
                  <textarea name="message" rows="5" />
                </label>
                <label className="hp" aria-hidden="true">Website
                  <input name="website" tabIndex="-1" autoComplete="off" />
                </label>
                {state === 'error' && (
                  <p className="notice notice--err" role="alert">
                    Something went wrong sending that. Please try again or message us on WhatsApp.
                  </p>
                )}
                <p className="letter__sign hand">with love, a future puppy parent</p>
                <button className="btn btn--primary" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Posting…' : 'Post my letter'}
                </button>
              </form>
            )}
          </div>

          <aside className="reach">
            <a className="btn btn--wa" href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phone}</a>
            <dl>
              <div><dt>call us</dt><dd><a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a></dd></div>
              {SITE.email && (
                <div><dt>email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap two two--visit">
          <div>
            <h2>Visit us in Downtown Dubai</h2>
            <p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p>
            <p className="pin">📍 {SITE.address}</p>
            <a className="btn btn--primary" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </div>
          <img className="visit__pic" src={media(SHOWROOM_PHOTOS[3])} alt="The apricot teddy bear puppy from our showroom, held up to say hello" loading="lazy" />
        </div>
      </section>
    </>
  );
}
