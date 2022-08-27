import axios from "axios";

export default axios.create({
  baseURL: "https://covid-193.p.rapidapi.com/statistics",
  headers: {
    'X-RapidAPI-Key': 'bdff54a99dmsh2d213312cc03f33p1e1311jsn863a216f8ca2',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  },
});