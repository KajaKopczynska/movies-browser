import axios from "axios";

export const baseUrl = "https://api.themoviedb.org/3/";
export const imagesBaseUrl = "https://image.tmdb.org/t/p";
export const apiKey = "?api_key=bfa987523fd9c0cf2deb2abc85980107";
export const language = "&language=en-US";

export const getApi = (url) =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));

