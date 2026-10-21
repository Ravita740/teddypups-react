import { useState } from 'react';
import { submitLead } from '../lib/submit.js';

// Compact enquiry form used on puppy profile pages.
export default function EnquiryForm({ id, puppyLabel }) {
  const [state, setState] = useState('idle'); // idle | sending | done | error
  const [how, setHow] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get('website')) return; // honeypot
    setState('sending');
    try {
      const res = await submitLead({
        puppy: puppyLabel,
        name: f.get('name').trim(),
        phone: f.get('phone').trim(),
        email: f.get('email').trim(),
        area: f.get('area').trim(),
        message: f.get('message').trim() || `Hi! I'd love to know more about ${puppyLabel}.`,
      });
      setHow(res);
      setState('done');
      e.currentTarget.reset();
    } catch {
      setState('error');
    }
  };

  if (state === 'done') {
    return (
      <div className="notice notice--ok" role="status">
        <strong>Thank you!</strong>{' '}
        {how === 'whatsapp'
          ? 'We opened WhatsApp with your details — just press send and our team will reply.'
          : 'Your enquiry is on its way. Our team will get back to you promptly.'}
      </div>
    );
  }

  return (
    <form className="form" id={id} onSubmit={onSubmit}>
      <label>Your name *
        <input name="name" required autoComplete="name" />
      </label>
      <label>Phone or WhatsApp *
        <input name="phone" required type="tel" autoComplete="tel" placeholder="With country code, e.g. +971 50 123 4567" />
      </label>
      <label>Email (optional)
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>Your area (optional)
        <input name="area" placeholder="e.g. Dubai Marina" />
      </label>
      <label className="form__full">Message (optional)
        <textarea name="message" rows="4" placeholder={`Hi! I'd love to know more about ${puppyLabel}.`} />
      </label>
      <label className="hp" aria-hidden="true">Website
        <input name="website" tabIndex="-1" autoComplete="off" />
      </label>
      {state === 'error' && (
        <p className="notice notice--err form__full" role="alert">
          Something went wrong sending that. Please try again or message us on WhatsApp.
        </p>
      )}
      <button className="btn btn--primary form__full" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  );
}
