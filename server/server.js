const express = require('express');
const fetch = require('node-fetch');
const gsheets = require('./gsheets');

const app = express();

// const listHolidays = gsheets.start().then(function(value) {
//   console.log('List of holidays => ', value);
// });

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (process.argv.includes('delayresponse')) {
    setTimeout(function () {
      next();
    }, 2000);
  } else {
    next();
  }
});

app.get('/weather/current', async (req, res) => {
  const APPID = process.env.OPEN_WEATHER_API;
  const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&q=City of London, GB&units=metric`;
  try {
    const weatherResponse = await fetch(url).then(res => res.json());

    res.json(weatherResponse);
  } catch (e) {
    console.error(e, 'failed to retrieve weather data');
  }
});

app.get('/images/all', function (req, res) {
  const values = [];

  res.json([{
      imageUrl: 'gallery/1.jpg'
    },
    {
      imageUrl: 'gallery/2.jpg'
    },
    {
      imageUrl: 'gallery/3.jpg'
    },
    {
      imageUrl: 'gallery/4.jpg'
    },
    {
      imageUrl: 'gallery/5.jpg'
    }
  ]);
});

app.get('/images/latest', async (req, res) => {
  try {
    const imagesResponse = await fetch('http://localhost:3001/images/all').then(res => res.json());

    const image = imagesResponse[Math.floor(Math.random() * 5 + 1)];
    if (image == undefined) {
      res.json({
        imageUrl: 'gallery/1.jpg'
      });
    }
    res.json(image);
  } catch (e) {
    console.error(e, 'failed to retrieve images data');
  }
});

app.get('/birthday/next', function (req, res) {
  res.json({
    name: 'Carola',
    date: '21st June',
    imageUrl: 'images/ced.jpg'
  });
});

app.get('/winning-behaviour/now', function (req, res) {
  res.json({
    name: 'Speak Up',
    date: '',
    imageUrl: 'images/winning-behaviour.jpg'
  });
});

app.get('/holidays/all', function (req, res) {
  res.json([{
      label: 'Cedric',
      value: '29/06'
    },
    {
      label: 'Jem',
      value: '13/08'
    },
    {
      label: 'Carola',
      value: '23/09'
    }
  ]);
});

app.get('/team-social/all', function (req, res) {
  res.json([{
      label: 'DI&DIT Hub Drinks',
      value: '14/06'
    },
    {
      label: 'Karaoke',
      value: '21/06'
    },
    {
      label: 'Major Event',
      value: '20/09'
    }
  ]);
});

app.get('/team-news/all', function (req, res) {
  res.json([{
      label: "Sita's Wedding",
      value: '27/08'
    },
    {
      label: 'Baby Robyn Due',
      value: '24/09'
    }
  ]);
});

app.listen(3001, function () {
  console.log('Data being served from http://localhost:3001');
});