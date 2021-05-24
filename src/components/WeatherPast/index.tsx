import React, { useEffect, useState } from 'react';

import CardPast from './CardPast';
import Intro from '../Intro';

import './style.scss';

const cities: { [key: string]: any } = {
  Samara: {
    lat: 53.195873,
    lon: 50.100193,
  },
  Tolyatti: {
    lat: 53.507836,
    lon: 49.420393,
  },
  Saratov: {
    lat: 51.533557,
    lon: 46.034257,
  },
  Kazan: {
    lat: 55.796127,
    lon: 49.106405,
  },
  Krasnodar: {
    lat: 55.796127,
    lon: 38.975313,
  },
};

export default function WeatherPast() {
  const [city, setCity] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<number>(0);
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [icon, setIcon] = useState<string>('');
  const [temp, setTemp] = useState<number>(0);

  const getPastWeather = async (lat: number, lon: number, time: number) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=f4ea689bc636fcf4c6e9a08ea5f9f7f8`
    );
    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      setLoaded(false);
    } else {
      setIcon(data.current.weather[0].icon);
      setTemp(data.current.temp);
      setLoaded(true);
    }
  };

  useEffect(() => {
    city && time && getPastWeather(cities[city].lat, cities[city].lon, time);
  });

  const onCityChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCity(e.target.value);

  const onDateChange = (e: React.ChangeEvent<HTMLDataElement>) => {
    setDate(e.target.value);

    const date = new Date(e.target.value);
    const timeMilliseconds = date.getTime();
    const timeSeconds = Math.floor(timeMilliseconds / 1000);
    setTime(timeSeconds);
  };

  return (
    <article className="weather-past">
      <section className="weather-past__top">
        <h1 className="weather-past__title">Forecast for a Date in the Past</h1>

        <section className="weather-past__forms">
          <select className="weather-past__select" onChange={onCityChange}>
            <option value="" disabled selected hidden>
              Select city
            </option>
            <option value="Samara">Самара</option>
            <option value="Tolyatti">Тольятти</option>
            <option value="Saratov">Саратов</option>
            <option value="Kazan">Казань</option>
            <option value="Krasnodar">Краснодар</option>
          </select>

          <input
            className="weather-past__select"
            type="date"
            onChange={onDateChange}
          />
        </section>
      </section>

      <section className="weather-past__content">
        {isLoaded ? (
          <CardPast date={date} icon={icon} temp={temp} />
        ) : (
          <Intro />
        )}
        <p className="weather-past__error">
          {!isLoaded && error && `Sorry, ${error}!`}
        </p>
      </section>
    </article>
  );
}
