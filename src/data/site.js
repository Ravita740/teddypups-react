// Central place for contact details, links and asset locations.
export const SITE = {
  name: 'TeddyPups U.A.E.',
  tagline: 'every puppy is family',
  phone: '+971 54 167 6733',
  whatsapp: '971541676733',
  // The original site hides its email behind Cloudflare protection. Add yours here
  // and it will show up in the footer and on the contact page automatically.
  email: '',
  address: 'Downtown Dubai, United Arab Emirates',
  mapsUrl: 'https://maps.app.goo.gl/ZdJvwHBSQWWZT54s7',
  instagram: 'https://www.instagram.com/teddypups.worldwide/',
  tiktok: 'https://www.tiktok.com/@teddypupsuae',
  facebook: 'https://www.facebook.com/profile.php?id=61567496944539',
  // Images are loaded from the live site. To self-host, download them into /public/media
  // and change this to '' (the helpers below then use relative paths).
  assetBase: 'https://puppy.instabizweb.com',
  // Optional: POST enquiries as JSON to this URL (Formspree, Getform, your own API...).
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
};

export const DEFAULT_MSG = "Hi TeddyPups! I'd love to know more about your puppies.";

export const wa = (text = DEFAULT_MSG) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const media = (p) => (p.startsWith('http') ? p : `${SITE.assetBase}/media/${p}`);
export const LOGO = `${SITE.assetBase}/brand/logo.png`;

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/puppies', label: 'Puppies' },
  { to: '/happy-families', label: 'Happy families' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Visit & contact' },
];

export const FOOTER_LINKS = [
  { to: '/puppies', label: 'Available puppies' },
  { to: '/gone-home', label: 'Gone home' },
  { to: '/happy-families', label: 'Happy families' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/how-it-works#delivery', label: 'Delivery & collection' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Visit & contact' },
];
