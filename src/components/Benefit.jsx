import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

import BenefitDrone from '../assets/images/Benefit/benefit.svg';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Benefit() {
  return (
    <section className="benefit-container">
      <div className="benefit">
        <div className="benefit-description">
          <h1>Why Drone Light?</h1>
          <p>
            We provide a best self drone easy to use and operate. With
            auto pilot, the device will take a beautiful view for the
            best of flying operation.
          </p>
        </div>
        <div className="benefit-table">
          <div>
            <h1>4K</h1>
            <p>
              Camera
              {' '}
              <br />
              Resolution
            </p>
          </div>
          <div>
            <h1>2 TB</h1>
            <p>
              Storage
              {' '}
              <br />
              Capacity
            </p>
          </div>
          <div>
            <h1>60 m/s</h1>
            <p>
              Super
              {' '}
              <br />
              Max Speed
            </p>
          </div>
          <div>
            <h1>30 mins</h1>
            <p>
              Long Flight
              {' '}
              <br />
              Time
            </p>
          </div>
        </div>
      </div>
      <Tilt className="benefit-blank">
        <img src={BenefitDrone} alt="Benefit" width="468px" />
      </Tilt>
    </section>
  );
}
