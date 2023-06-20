import React, { useState } from 'react';

export default function GalleryList(props) {
  const { data, setIsModalOpen, setImageSource, setImageDescription } = props;

  const imgClickHandler = (imagesUrl, imageDescription) => {
    setIsModalOpen(true);
    setImageSource(imagesUrl);
    setImageDescription(imageDescription);
  };

  return (
    <div className="gallery-list-item" key={data.name}>
      <div className="gallery-list-item-image-container" onClick={() => imgClickHandler(data.images, data.description)}>
        <img src={data.images} alt={data.name} />
        <div className="gallery-list-item-image-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" className="gallery-list-item-image-overlay-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
      <p className="gallery-list-item-description">{data.description}</p>
    </div>
  );
}
