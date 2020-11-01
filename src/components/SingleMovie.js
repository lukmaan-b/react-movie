import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleMovie = ({ movies }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    if (movies) {
      setCurrentMovie(movies.find((el) => el.id == id));
    }
  }, [id, movies]);
  return currentMovie ? (
    <div
      className="backdrop"
      // style={{
      //   backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${currentMovie.backdrop_path})`,
      // }}
    >
      <div className="movie__card">
        <div className="movie__title-section">
          <h1>{currentMovie.title}</h1>
          <div className="release-date">
            {new Date(currentMovie.release_date).toLocaleDateString()}
          </div>
        </div>
        <div className="movie__description">
          <p>{currentMovie.overview}</p>
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w200${currentMovie.poster_path}`}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default SingleMovie;
