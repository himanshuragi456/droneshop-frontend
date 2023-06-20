import React from 'react';

import { testimonials } from '../json/testimonials.json';

export default function Testimonial() {
  return (
    <section className="testimonial">
      <h1 className="testimonial-title">
        What Our “Pilots”
        <br />
        Are Saying
      </h1>
      <div className="testimonials-grid">
        {
          testimonials.map((items) => (
            <div className="testimonials-list">
              <p className="user-testimonial">{items.testimonial}</p>
              <div className="testimonial-user-profile">
                <img src={items.images} alt="User Testimonial" />
                <div className="testimonial-user-name-job">
                  <h1>{items.name}</h1>
                  <p>{items.job}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}
