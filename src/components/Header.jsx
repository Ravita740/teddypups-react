import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LOGO, NAV, SITE, wa } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="ticker">{SITE.tagline}</div>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <div className="wrap header__row">
          <Link to="/" className="brand">
            <img src={LOGO} alt="" width="40" height="40" />
            <span>TeddyPups</span>
          </Link>
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>
            ))}
          </nav>
          <a className="btn btn--wa btn--sm header__wa" href={wa()} target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="drawer">
            Menu
          </button>
        </div>
      </header>

      <div id="drawer" className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel">
          <div className="drawer__top">
            <span className="hand">where to, friend?</span>
            <button className="menu-btn" onClick={() => setOpen(false)}>Close</button>
          </div>
          <nav aria-label="Mobile">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} tabIndex={open ? 0 : -1}>{n.label}</NavLink>
            ))}
          </nav>
          <a className="btn btn--wa" href={wa()} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            WhatsApp us
          </a>
          <a className="drawer__phone" href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a>
        </div>
      </div>
    </>
  );
}
