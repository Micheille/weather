import React from 'react';

import image from '../../assets/placeholder/Academy-Weather-bg160.svg';

import './style.scss';

export default function Intro() {
  return (
    <section className="intro">
      <img src={image} />
      <p className="intro__text">
        Fill in all the fields and the weather will be displayed
      </p>
    </section>
  );
}
