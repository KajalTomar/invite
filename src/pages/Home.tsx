import './Home.scss';
import { useCallback, useMemo, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

// Import images so Vite bundles them
import haldi from '/KR_Haldi_SaveTheDate.png';
import mehndi from '/KR_Mehndi_SaveTheDate.png';
import wedding from '/KR_Wedding_SaveTheDate.png';
import reception from '/KR_Reception_SaveTheDate.png';

const allInvites = [haldi, mehndi, wedding, reception];

export default function Home() {
  const [currentInviteIndex, setCurrentInviteIndex] = useState(0);
  const len = allInvites.length;

  // Guards for empty array
  const safeNext = useCallback(
    () => len && setCurrentInviteIndex((i) => (i + 1) % len),
    [len]
  );
  const safePrev = useCallback(
    () => len && setCurrentInviteIndex((i) => (i - 1 + len) % len),
    [len]
  );

  const handlers = useSwipeable({
    onSwipedLeft: safePrev,   // left → previous
    onSwipedRight: safeNext,  // right → next
    onTap: safeNext,          // tap → next (wrap)
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Optional: image alts per invite (improves accessibility)
  const altText = useMemo(() => {
    const names = ['Haldi', 'Mehndi', 'Wedding', 'Reception'];
    return names[currentInviteIndex] ? `${names[currentInviteIndex]} – Save the Date` : 'Save the Date';
  }, [currentInviteIndex]);

  if (len === 0) {
    return <div className="home">No invites available.</div>;
  }

  return (
    <div {...handlers} className="home" style={{ touchAction: 'pan-y' }}>
      <img
        src={allInvites[currentInviteIndex]}
        alt={altText}
        className="home__image"
        loading="eager"
        decoding="async"
        draggable={false}
      />
      <div className="AllCircles" aria-label="Slide indicator" role="tablist">
        {allInvites.map((_, index) => (
          <div
            key={index}
            className={index === currentInviteIndex ? 'circle' : 'hollow-circle'}
            role="tab"
            aria-selected={index === currentInviteIndex}
            aria-label={`Invite ${index + 1} of ${len}`}
            onClick={() => setCurrentInviteIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
