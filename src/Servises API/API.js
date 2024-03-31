// const KEY = "818c07cd7fe0bbd4320b986aba81e11e";
// const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MThjMDdjZDdmZTBiYmQ0MzIwYjk4NmFiYTgxZTExZSIsInN1YiI6IjY1ZmMzMzMyNzcwNzAwMDE3YzA4NzA4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4F0k7bIfkYS7Oc3_N_EccPoIKr6-ffXQtC4-KRv-Kf4";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";


const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MThjMDdjZDdmZTBiYmQ0MzIwYjk4NmFiYTgxZTExZSIsInN1YiI6IjY1ZmMzMzMyNzcwNzAwMDE3YzA4NzA4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4F0k7bIfkYS7Oc3_N_EccPoIKr6-ffXQtC4-KRv-Kf4",
    },
  };

const trendReq = async () => {
  const res = await axios.get('trending/movie/week', options)

  return res.data.results
}

const queryReq = async (query) => {
  const res = await axios.get(
    `search/movie?include_adult=true&page=1&query=${query}`,
    options
  );

  return res.data.results
}

const movieDetailsReq = async (movieId) => {
  const res = await axios.get(`movie/${movieId}`, options)

  return res.data
}

const movieCastReq = async (movieId) => {
  const res = await axios.get(`movie/${movieId}/credits`, options)

  return res.data.cast
}

const movieReviewsReq = async (movieId) => {
  const res = await axios.get(`movie/${movieId}/reviews`, options)

  return res.data.results
}

export { 
  trendReq,
  queryReq,
  movieDetailsReq,
  movieCastReq,
  movieReviewsReq
}