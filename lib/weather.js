const lat = '-38.1667';
const lon = '144.7167';
export const getWeather = () =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`;
