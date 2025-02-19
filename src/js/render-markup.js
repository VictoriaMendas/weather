export function createMarkup({ main, sys, clouds, name }) {
  return `
      <div class="weather__card">
    <h2 class="city-name">${name}</h2>
    <ul class="weather-info list">
        <li class="weather-info-item">
            <p class="temp">Температура: ${main.temp}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="feels-like-temp">Відчувається як: ${main.feels_like}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${sys.sunrise}</p>
        </li>
        <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${sys.sunset}</p>
        </li>
        <li class="weather-info-item">
            <p class="clouds">Хмарність: ${clouds.all}%</p>
        </li>
    </ul>
</div>  `;
}
