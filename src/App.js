import { Config } from './api';
import useFetch from './useFetch';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import MovieList from './components/MovieList';
import { AnimatePresence } from 'framer-motion';
import './App.css';
function App() {
  const moveList = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${Config.API_KEY}`
  );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AnimatePresence exitBeforeEnter>
            <MovieList movies={moveList} />
          </AnimatePresence>
        </Route>
        <Route path="/movies/:id">
          <AnimatePresence exitBeforeEnter>
            <SingleMovie movies={moveList} />
          </AnimatePresence>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
