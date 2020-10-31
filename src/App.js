import { Config } from './api';
import useFetch from './useFetch';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SingleMovie from './components/SingleMovie';
import MovieList from './components/MovieList';
import './App.css';
function App() {
  const moveList = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${Config.API_KEY}`
  );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <main>
            <h1>Movies</h1>
            <section className="grid">
              <MovieList movies={moveList} />
            </section>
          </main>
        </Route>
        <Route path="/movies/:id">
          <SingleMovie movies={moveList} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
