import { Link } from 'react-router-dom';
import { FOOTER_LINKS, LOGO, SITE, wa } from '../data/site.js';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer__grid">
          <div>
            <h2 className="footer__big">Home, at last.</h2>
            <p>
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies,
              offering premium services and worldwide shipping.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Say hello</h3>
            <ul>
              <li><a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phone}</a></li>
              {SITE.email && <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
              <li>{SITE.address}</li>
            </ul>
            <ul className="social">
              <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href={SITE.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap footer__base">
          <span className="footer__brand">
            <img src={LOGO} alt="" width="28" height="28" />
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span className="hand">{SITE.tagline}</span>
        </div>
      </footer>

      <div className="mobile-bar">
        <a className="btn btn--wa" href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        <a className="btn btn--ghost" href={`tel:${SITE.phone.replace(/\s/g, '')}`}>Call</a>
      </div>
    </>
  );
}
