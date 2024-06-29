import { getCurrentWeather } from './openWeather-Api';
import { createMarkup } from './render-markup';

const form = document.querySelector('.form');
const output = document.querySelector('.weather-card');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.search.value.trim();

  try {
    const { data } = await getCurrentWeather(searchQuery);
    console.log(data);
    output.innerHTML = createMarkup(data);
  } catch (error) {}
});
