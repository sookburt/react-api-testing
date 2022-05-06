import axios from "axios";

export interface IFilm {
  id: string;
  title: string;
}

const callApi = async() => {
  const apiResponse = await axios.get('https://ghibliapi.herokuapp.com/films/');
  if (apiResponse.status !== 200) throw new Error(`ERROR: The Api returned ${apiResponse.status}`);
  return apiResponse.data;
}

export default callApi;
