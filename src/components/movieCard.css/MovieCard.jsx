import React from 'react';

import './movieCard.css';

export const MovieCard = ({
  poster,
  title,
  plot,
  year,
  actors,
  country,
  runtime,
  genre,
}) => (
  <div className="movie-card">
    <div className="movie-card-block">
      <p className="movie-card-title">{title}</p>
      <img
        src={poster}
        alt="Movie logo"
        className="movie-card-img"
      />
    </div>
    <div className="movie-card-info">
      <div>
        <span>{year} /</span>
        <span> {country} /</span>
        <span> {runtime}</span>
      </div>
      <p>{genre}</p>
      <p>{actors}</p>
      <p>{plot}</p>
    </div>
  </div>
);
