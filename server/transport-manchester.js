const express = require('express'),
  router = express.Router();

const fetch = require('node-fetch');
const BASE_URL = `https://tfgm.com/api/`;
const TRAM_STATUS = `statuses/tram`;
const PLANNED_WORKS = `public-transport/planned-network-improvements`;

router.get('/status', async (req, res) => {
  try {
    const tramResponse = await (await fetch(BASE_URL + TRAM_STATUS)).json();

    //TODO: Implement if needed
    //const plannedWorksResponse = await (await fetch(BASE_URL + PLANNED_WORKS)).json();

    return await res.json(tramResponse);
  } catch (e) {
    console.error(e, 'failed to retrieve data from Transport for Greater Manchester API');
  }
});

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

module.exports = router;
