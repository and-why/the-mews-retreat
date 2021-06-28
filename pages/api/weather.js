// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getWeather } from '../../lib/weather';

export default async (req, res) => {
  const weather = await getWeather();
  res.status(200).json(weather);
};
