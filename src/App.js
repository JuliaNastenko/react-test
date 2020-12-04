import { FindMovie }from './components/findMovie/FindMovie.jsx';

import './App.css';

function App() {
  return (
    <>
      <div className="search__block">
        <h3 className="search__text fade-in">
          Find a movie
        </h3>
        <FindMovie />
      </div>
    </>
  );
}

export default App;
