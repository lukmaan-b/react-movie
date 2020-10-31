import { Config } from './api';
import useFetch from './useFetch';

function App() {
  const moveList = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${Config.API_KEY}`
  );
  console.log(moveList);
  return (
    <div className="App">
      <h1>d</h1>
    </div>
  );
}

export default App;
