import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="movie__card"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="movie__title-section"
        >
          <h1>{currentMovie.title}</h1>
          <div className="release-date">
            {new Date(currentMovie.release_date).toLocaleDateString()}
          </div>
        </motion.div>
        <div className="movie__description">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {currentMovie.overview}
          </motion.p>
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w200${currentMovie.poster_path}`}
            alt=""
            srcset=""
          />
        </div>
      </motion.div>
    </div>
  ) : null;
};

export default SingleMovie;
