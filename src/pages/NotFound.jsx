import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap center">
        <p className="hand">oh no, this pup wandered off</p>
        <h1>Page not found</h1>
        <p className="lead">We couldn't find that page — but plenty of puppies are waiting for you.</p>
        <div className="row row--center">
          <Link to="/puppies" className="btn btn--primary">See available puppies</Link>
          <Link to="/" className="btn btn--ghost">Back home</Link>
        </div>
      </div>
    </section>
  );
}
