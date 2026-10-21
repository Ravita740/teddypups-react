import { SITE, wa } from '../data/site.js';

// Sends an enquiry. If VITE_FORM_ENDPOINT is set it POSTs JSON there; otherwise it opens
// WhatsApp with the details pre-filled so no enquiry is ever lost.
export function submitLead(fields) {
  const lines = [
    "Hi TeddyPups! Here's my enquiry:",
    fields.puppy ? `Puppy: ${fields.puppy}` : null,
    `Name: ${fields.name}`,
    `Phone / WhatsApp: ${fields.phone}`,
    fields.email ? `Email: ${fields.email}` : null,
    fields.area ? `Area: ${fields.area}` : null,
    fields.message ? `Message: ${fields.message}` : null,
  ].filter(Boolean);

  if (SITE.formEndpoint) {
    return fetch(SITE.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(fields),
    }).then((r) => {
      if (!r.ok) throw new Error('Request failed');
      return 'sent';
    });
  }

  window.open(wa(lines.join('\n')), '_blank', 'noopener');
  return Promise.resolve('whatsapp');
}
