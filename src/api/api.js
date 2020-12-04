const API_URL = `https://www.omdbapi.com/`;

export const fetchMovies = async(title) => {
  const movie = await fetch(`${API_URL}?apikey=b634e39f&t=${title}`);

  return movie.json();
};
