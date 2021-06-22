import React from 'react';

import './style.scss';

const months: { [key: number]: string } = {
  1: 'jan',
  2: 'feb',
  3: 'mar',
  4: 'apr',
  5: 'may',
  6: 'jun',
  7: 'jul',
  8: 'aug',
  9: 'sep',
  10: 'oct',
  11: 'nov',
  12: 'dec',
};

export default function CardPast({
  date,
  icon,
  temp,
}: {
  date: string;
  icon: string;
  temp: number;
}) {
  const dateD = new Date(date);
  const month = months[dateD.getMonth()];
  const day = dateD.getDate();
  const year = dateD.getFullYear();

  return (
    <section className="card">
      <p className="card__date">{`${day} ${month} ${year}`}</p>

      <div className="card__icon">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>

      <p className="card__temp">{`+ ${Math.round(temp - 273)}`}</p>
    </section>
  );
}
