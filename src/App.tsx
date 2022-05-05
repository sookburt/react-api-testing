import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import FilmsDisplay from './FilmsDisplay';
import { IFilm } from './IFilm';

function App() {

  const [ filmState, setFilmState ] = useState<Array<IFilm>>([]);

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
        filmState && <FilmsDisplay films={filmState}/>
      }
    </div>
  );
}

export default App;
