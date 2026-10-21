import { useMemo, useState } from 'react';
import { FAQS } from '../data/content.js';
import { wa } from '../data/site.js';

export default function Faq() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(0);

  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    return FAQS.map((f, i) => ({ f, i })).filter(({ f }) => !t || f.join(' ').toLowerCase().includes(t));
  }, [q]);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Questions &amp; answers</h1>
          <p className="lead">Can't find what you're looking for? Message us on WhatsApp — our team is available 24/7.</p>
          <label className="search">
            <span className="hand">sniff out a question</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search e.g. delivery, vaccinated, import…"
            />
          </label>
          <p className="eyebrow">{shown.length} {shown.length === 1 ? 'note' : 'notes'} on the board</p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="wrap narrow">
          <div className="acc">
            {shown.map(({ f: [question, answer], i }) => (
              <details key={question} open={q ? true : open === i} onToggle={(e) => { if (e.currentTarget.open && !q) setOpen(i); }}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
            {!shown.length && <p className="empty">No matching questions. Ask us directly instead!</p>}
          </div>
          <p className="center">
            <a className="btn btn--wa" href={wa("Hi TeddyPups! I have a question:")} target="_blank" rel="noopener noreferrer">
              Ask your own question
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
