import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top on route change, or to the #anchor if the URL has one.
// Also keeps the document title in sync.
const TITLES = {
  '/': 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  '/puppies': 'Available puppies | TeddyPups U.A.E.',
  '/gone-home': 'Gone home | TeddyPups U.A.E.',
  '/happy-families': 'Happy families | TeddyPups U.A.E.',
  '/how-it-works': 'How it works | TeddyPups U.A.E.',
  '/faq': 'Questions & answers | TeddyPups U.A.E.',
  '/contact': 'Visit & contact | TeddyPups U.A.E.',
};

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (TITLES[pathname]) document.title = TITLES[pathname];
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
