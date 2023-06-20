import React, { useState } from 'react';

import MediaModal from './MediaModal';
import VideShot from '../assets/images/Video/video.png';
import Play from '../assets/images/Video/play.svg';

export default function Video() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="video">
      <h1>
        4K video shot on our
        <br />
        Drone Light
      </h1>
      <div className="video-player">
        <img src={VideShot} alt="Video" className="video-shot" />
        <button type="button" onClick={() => setIsModalOpen(true)} className="video-button">
          <img src={Play} alt="Play" className="video-play" />
        </button>
      </div>
      <MediaModal src="https://www.youtube.com/embed/QojXRvYgXxo" isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} video />
    </section>
  );
}
