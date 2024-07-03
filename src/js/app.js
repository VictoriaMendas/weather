import { getCurrentWeather, getWeatherHourly } from './openWeather-Api';
import { createMarkup } from './render-markup';

const form = document.querySelector('.form');
const output = document.querySelector('.weather-card');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.search.value.trim();

  try {
    const { data } = await getCurrentWeather(searchQuery);

    output.innerHTML = createMarkup(data);
  } catch (error) {}
});

function currentTime() {
  const date = new Date(1719968183);
}
currentTime();
переделай полностью функцию запроса
и все что с ней связано а так жн рендел функцию