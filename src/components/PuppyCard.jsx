import { Link } from 'react-router-dom';
import { displayName, metaLine } from '../data/puppies.js';
import { media } from '../data/site.js';

export default function PuppyCard({ puppy, index }) {
  const gone = puppy.status === 'gone';
  return (
    <Link to={`/puppies/${puppy.slug}`} className={`pcard ${gone ? 'pcard--gone' : ''}`}>
      <div className="pcard__img">
        <img
          src={media(puppy.images[0])}
          alt={`${displayName(puppy)}, ${puppy.gender === 'boy' ? 'male' : puppy.gender === 'girl' ? 'female' : ''} ${puppy.breed} puppy`.replace(/\s+/g, ' ')}
          loading="lazy"
        />
        <span className={`badge ${gone ? 'badge--gone' : ''}`}>{gone ? 'gone home ♥' : 'Available'}</span>
        {puppy.video && <span className="badge badge--video">▶ video</span>}
        {index != null && <span className="pcard__num">{String(index + 1).padStart(2, '0')}</span>}
      </div>
      <div className="pcard__body">
        <strong>{displayName(puppy)}</strong>
        <span>{metaLine(puppy)}</span>
      </div>
    </Link>
  );
}
