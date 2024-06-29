import axios from 'axios';

export async function getCurrentWeather(query) {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  return axios.get(`${BASE_URL}`, {
    params: {
      appid: '95632b02f9162f375a368971925f5209',
      q: query,
      units: 'metric',
    },
  });
}
