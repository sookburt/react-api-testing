import FilmDisplay from "./FilmDisplay"
import { IFilm } from "./IFilm"

interface Props {
  films: IFilm[];
}

const FilmsDisplay: React.FC<Props> = ({films}) => {

  return(
    <>
      <h2>Films:</h2>
      {films && films.map(film => <FilmDisplay key={film.id} {...film} />)}
    </>
  )
}

export default FilmsDisplay