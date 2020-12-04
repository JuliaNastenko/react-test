import React, {useState} from 'react';
import { fetchMovies } from '../../api/api.js';
import { MovieCard } from '../movieCard.css/MovieCard.jsx';

import './findMovie.css';

export const FindMovie = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [foundMovie, setFoundMovie] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const searchMovies = async (title) => {

    const movies = await fetchMovies(title);

    if (movies.Response === 'False') {
      setNotFound(true);
      setShowPreview(false);
    } else {
      setFoundMovie ({
        poster: movies.Poster,
        title: movies.Title,
        plot: movies.Plot,
        year: movies.Year,
        actors: movies.Actors,
        country: movies.Country,
        runtime: movies.Runtime,
        genre: movies.Genre,
      });
      setNotFound(false);
      setShowPreview(true);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          searchMovies(searchTitle);
          setSearchTitle('');
        }
        }
        autoComplete="off"
        className="search__form fade-in">
        <div>
          <label htmlFor="movie-title">
            <input
                type="text"
                id="movie-title"
                className="search__input"
                placeholder="Search"
                aria-label="Search"
                value={searchTitle}
                onChange={(event) => {
                  setSearchTitle(event.target.value);
                  setNotFound(false);
                }}
              />
          </label>
          {notFound && (
            <p className="search__error">
              Can&apos;t find a movie with such a title
            </p>
          )}
        </div>
        <div>
          <div>
            <button
              type="submit"
              className="search__button"
            >
              Find
            </button>
          </div>
        </div>
        </form>
        {showPreview && (
          <div>
            <MovieCard {...foundMovie} />
          </div>
        )}
    </>
  );
};
