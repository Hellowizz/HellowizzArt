import React, { useState, useEffect } from 'react';

export default function DrawingSection({tabImgs, duration}) {
  const [seconds, setSeconds] = useState(0);
  const [currentImgId, setCurrentImgId] = useState(0);
  const [timeAtTransition, setTimeAtTransition] = useState(0);
  const [imgIsInTransition, setImgIsInTransition] = useState(false);


  console.log('duration : ' + duration);

  function reset() {
    setSeconds(0);
  }

  useEffect(() => {
    let interval = null;

    if (seconds % duration === 0) {
    	setImgIsInTransition(true);
    	setTimeAtTransition(seconds);
    }

    if (imgIsInTransition && seconds - timeAtTransition === 1) {
    	setImgIsInTransition(false);
    	let random = Math.floor(Math.random() * tabImgs.length);
    	if (random === currentImgId) { random = Math.floor(Math.random() * tabImgs.length);}
    	setCurrentImgId(random);
    }

    interval = setInterval(() => {
    	setSeconds(seconds => seconds + 1);}, 1000);
    return () => clearInterval(interval);
  }, [seconds, currentImgId, timeAtTransition, imgIsInTransition]);

  return (
    <div className="drawings-container" style={{ background : 'center/cover no-repeat url(' + tabImgs[currentImgId] + ')', opacity : imgIsInTransition ? '0' : '.3' }} />
  );
};