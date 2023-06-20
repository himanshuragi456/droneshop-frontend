import React, { useState } from 'react';

import GalleryList from './GalleryList';
import MediaModal from './MediaModal';
import { gallery } from '../json/gallery.json';

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSource, setImageSource] = useState();
  const [imageDescription, setImageDescription] = useState();

  return (
    <section className="gallery">
      <div className="gallery-title">
        <h1>Gallery</h1>
        <p>
          Make every moment flying operation become unforgettable.
        </p>
      </div>
      <div className="gallery-list">
        {
          gallery.map((items) => (
            <div>
              <GalleryList data={items} setIsModalOpen={setIsModalOpen} setImageSource={setImageSource} setImageDescription={setImageDescription} />
              <MediaModal src={imageSource} imageDescription={imageDescription} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
            </div>
          ))
        }
      </div>
    </section>
  );
}
