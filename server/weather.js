const express = require('express'),
  router = express.Router()

const fetch = require('node-fetch');
const APPID = process.env.OPEN_WEATHER_API;
const URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&q=City of London, GB&units=metric`;

router.get('/weather/current', async (req, res) => {
  try {
    const weatherResponse = await fetch(URL).then(res => res.json());

    res.json(weatherResponse);
  } catch (e) {
    console.error(e, 'failed to retrieve weather data');
  }
});

module.exports = router