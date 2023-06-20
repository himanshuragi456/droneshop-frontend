import React from 'react';

export default function Content() {
  const zoomIn = (child) => {
    document.querySelector(`.content-child-${child}`).style.transform = 'scale(1.2)';
  };

  const zoomOut = (child) => {
    document.querySelector(`.content-child-${child}`).style.transform = 'scale(1)';
  };

  return (
    <section className="content">
      <div className="content-parent" onMouseOver={() => zoomIn(1)} onMouseOut={() => zoomOut(1)}>
        <div className="content-child-1" />
        <div className="content-child-text">
          <h1 className="content-heading">Ultra Light</h1>
          <p className="content-paragraph">
            Drone move faster with weighing component
            {' '}
            <span className="content-paragraph-span">under 200 g</span>
          </p>
        </div>
      </div>
      <div className="content-parent" onMouseOver={() => zoomIn(2)} onMouseOut={() => zoomOut(2)}>
        <div className="content-child-2" />
        <div className="content-child-text">
          <h1 className="content-heading">Best Resolution</h1>
          <p className="content-paragraph">
            Take a beautiful view with best camera
            up to
            {' '}
            <span className="content-paragraph-span">4K Camera Resolution</span>
          </p>
        </div>
      </div>
    </section>
  );
}
