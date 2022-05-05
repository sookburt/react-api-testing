import FilmDisplay from "./FilmDisplay"
import { IFilm } from "./IFilm"

interface props {
  films: IFilm[];
}

const FilmsDisplay: React.FC<props> = ({films}) => {

  return(
    <>
      <h2>Films:</h2>
      {films.map(film => <FilmDisplay {...film} />)}
    </>
  )
}

export default FilmsDisplay