import axios from "axios";

const API_KEY = 'fd6be710424e76f98995d0badce3b725';
const API_BASE = 'https://api.themoviedb.org/';
const API_TRENDING = '3/trending/movie/day';

export const getTrendFilms = async () => {
    try {
        const data = await axios.get(`${API_BASE}${API_TRENDING}?api_key=${API_KEY}`);
   console.log(data.data.results)
        return data.data.results;

    } catch (error) {
        console.error(error);
    }
}

export const getFilmDetails = async (filmId) => {
    try{
        const data = await axios.get(
      `${API_BASE}/3/movie/${filmId}?api_key=${API_KEY}&append_to_response=credits,reviews`
    );
   
    const filmDetails = {
      id: data.id,
      title: data.title,
      overview: data.overview,
      posterPath: data.poster_path,
      releaseDate: data.release_date,
      cast: data.credits.cast.slice(0, 5),
      reviews: data.reviews.results,
        };
        
    return filmDetails;
  } catch (error) {
    console.error(error);
  }
}

export const getFilmName = async (query) => {
    try{
        const data = await axios.get(
      `${API_BASE}/3/movie?api_key=${API_KEY}&query=${query}`
    );
   
    const filmDetails = {
      id: data.id,
      title: data.title,
      overview: data.overview,
      posterPath: data.poster_path,
      releaseDate: data.release_date,
      cast: data.credits.cast.slice(0, 5),
      reviews: data.reviews.results,
        };
        console.log(data.data.results)
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
}