import React from 'react';

export default function Modal(props) {
  const { src, imageDescription, isOpen, closeModal, image, video } = props;

  if (isOpen) {
    return (
      <section className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {
            video ? (
              <iframe
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="modal-content-image">
                <img src={src} alt="Gallery" />
                <p>{imageDescription}</p>
              </div>
            )
          }
        </div>
      </section>
    );
  }

  return null;
}
