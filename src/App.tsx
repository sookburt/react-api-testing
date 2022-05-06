import React, { useEffect, useState } from 'react';
import './App.css';
import FilmsDisplay from './FilmsDisplay';
import callApi, { IFilm } from './IFilm';
import { ErrorWithMessage } from './ErrorUtil';

function App() {

  const [ filmState, setFilmState ] = useState<Array<IFilm>>([]);
  const [ errorState, setErrorState ] = useState<ErrorWithMessage>({isError: false, message: ''});

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async() => {
    let data:IFilm[] = [];
    try{
      data = await callApi();
    } catch (err: any) {
      setErrorState({isError: true, message: err.message});
    }
    setFilmState(data);
  }

  if (errorState.isError) {
    return(
      <div className="App">
        <div role='alert'>Sorry, there was an error!</div>
      </div>
    );
  }
  else {
    return(
      <div className="App">
        <h1>Welcome to Testing API Calls with MSW</h1>
        {
          filmState && <FilmsDisplay films={filmState}/>
        }
      </div>
    );
  }
}

export default App;
