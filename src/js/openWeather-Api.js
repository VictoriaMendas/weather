import axios from 'axios';

// export async function getCurrentWeather(query) {
//   const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
//   return axios.get(`${BASE_URL}`, {
//     params: {
//       appid: '9550c1ff381b34c758179f1e4100d383',
//       q: query,
//       units: 'metric',
//     },
//   });
// }
export async function getWeatherHourly(wind) {
  const BASE_URL2 = 'https://pro.openweathermap.org/data/2.5/forecast/hourly';
  return axios.get(`${BASE_URL2}`, {
    params: {
      appid: '9550c1ff381b34c758179f1e4100d383',
      wind: 'speed',
      units: 'metric',
    },
  });
}
getWeatherHourly(time);
