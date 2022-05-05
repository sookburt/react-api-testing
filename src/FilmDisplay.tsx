import { IFilm } from "./IFilm";

const FilmDisplay: React.FC<IFilm> = ({id, title}) => {

  return(
    <p>{title}</p>
  )
}

export default FilmDisplay;