import React, { useEffect, useState } from 'react';
import Song from './play.mp3';

const AudioPlayer = () => {
  const [audio] = useState(new Audio(Song));

  useEffect(() => {
    const playAudio = () => {
      audio.play();
      document.removeEventListener('click', playAudio);
    };

    document.addEventListener('click', playAudio);
    
    return () => {
      document.removeEventListener('click', playAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return <p>Click anywhere to enable audio 🎵</p>;
};

export default AudioPlayer;