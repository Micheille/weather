import React from 'react';

import WeatherPast from '../WeatherPast';

import './style.scss';

export default function Weather() {
  return (
    <div className="weather">
      <header className="weather__header">
        <div className="weather__title">
          <h1 className="weather__title-word weather__title-word_weather">
            Weather
          </h1>
          <h1 className="weather__title-word weather__title-word_forecast">
            forecast
          </h1>
        </div>
      </header>

      <main className="weather__main">
        <WeatherPast />
      </main>

      <footer className="weather__footer">
        <p className="weather__meta">С любовью от Mercury Development</p>
      </footer>
    </div>
  );
}
