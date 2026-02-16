import './Home.scss';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const allInvites = ['KR_Haldi_SaveTheDate.png','KR_Mehndi_SaveTheDate.png', './KR_Wedding_SaveTheDate.png', './KR_Reception_SaveTheDate.png'];

export default function Home() {
  const handlers = useSwipeable({
    onSwipedLeft: () => setcurrentInviteIndex((prevIndex) => (prevIndex - 1 + allInvites.length) % allInvites.length),
    onSwipedRight: () => setcurrentInviteIndex((prevIndex) => (prevIndex + 1) % allInvites.length),
    preventScrollOnSwipe: true, 
    trackMouse: true, 
  });
  const [currentInviteIndex, setcurrentInviteIndex] = useState(0);



  return (
    <div {...handlers}  className="home">
      <img
        src={allInvites[currentInviteIndex]}
        alt="Save the Date"
        className="home__image"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}