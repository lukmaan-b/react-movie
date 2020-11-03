import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  whileHover: { scale: 1.2 },
  show: { opacity: 1, y: 0 },
};

const MovieList = ({ movies }) => {
  return (
    <main>
      <h1>Movies</h1>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="grid"
      >
        {movies &&
          movies.map(({ id, title, poster_path }) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              variants={item}
              className="card"
            >
              <Link className="link" to={`movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt=""
                />
              </Link>
            </motion.div>
          ))}
      </motion.section>
    </main>
  );
};

export default MovieList;
