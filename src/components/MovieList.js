import React from 'react';
import { Link } from 'react-router-dom';
const MovieList = ({ movies }) => {
  return movies
    ? movies.map(({ id, title, poster_path }) => (
        <Link className="link" to={`movies/${id}`}>
          <div className="card">
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
          </div>
        </Link>
      ))
    : null;
};

export default MovieList;
