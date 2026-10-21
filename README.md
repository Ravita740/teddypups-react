# TeddyPups U.A.E. — React site

React 18 + Vite + React Router. Recreates https://puppy.instabizweb.com/ with the same pages, theme and features.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs /dist
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home (hero slideshow, pups, two ways, journey, chat card, trust, happy families, FAQ teaser, CTA) |
| `/puppies` | Available puppies, filter by `?origin=local\|imported` and `?breed=maltipoo\|pomeranian\|poodle\|cavapoo\|shih-tzu` |
| `/puppies/:slug` | Puppy profile (gallery, facts, WhatsApp, enquiry form, previous/next) |
| `/gone-home` | Puppies that found families (ticket cards) |
| `/happy-families` | Photo wall with lightbox |
| `/how-it-works` | Anchors: `#two-ways`, `#promise`, `#delivery`, `#why` |
| `/faq` | Searchable accordion |
| `/contact` | Letter-style enquiry form, map link, showroom photo |

## Edit your content

- `src/data/site.js` — phone, WhatsApp number, **email** (empty by default), address, socials.
- `src/data/puppies.js` — add/remove puppies. `origin` is `local` or `imported`.
- `src/data/content.js` — page copy, FAQ, happy-families photos.
- `src/styles.css` — colours are CSS variables at the top (`--accent`, `--bg`, ...).

## Enquiry forms

By default the forms open WhatsApp with the details pre-filled. To receive them by email/CRM instead,
set `VITE_FORM_ENDPOINT` (e.g. a Formspree URL) in a `.env` file; the form will POST JSON there.

## Images

Images load from the original site (`assetBase` in `site.js`). To self-host, download them into
`public/media/...`, keep the same folder structure, and set `assetBase` to `''`.

## Deploying

It is a single-page app, so the host must serve `index.html` for every path.
`public/_redirects` already does this for Netlify/Cloudflare Pages. For Apache add an
`.htaccess` rewrite to `index.html`; for Nginx use `try_files $uri /index.html;`.
