import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Film } from './IFilm';

function App() {

  const [ filmState, setFilmState ] = useState<Array<Film>>([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async() => {

    try {
      const apiResponse = await axios.get('https://ghibliapi.herokuapp.com/films/');
      setFilmState(apiResponse.data);
    }
    catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Testing API Calls with MSW</h1>
      {
        filmState && filmState.map(film => <p>{film.title}</p>)
      }
    </div>
  );
}

export default App;
