const lat = '-38.1667';
const lon = '144.7167';
export const getWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`,
  );
  const weather = await res.json();

  return weather;
};
