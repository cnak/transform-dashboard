const express = require('express');
const fetch = require('node-fetch');
const gsheets = require('./gsheets');

const API_URL = 'http://localhost:3001'

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
      imageUrl: 'gallery/6.jpg'
    },
    {
      imageUrl: 'gallery/7.jpg'
    },
    {
      imageUrl: 'gallery/8.jpg'
    },
    {
      imageUrl: 'gallery/9.jpg'
    },
  ]);
});

app.get('/images/latest', async (req, res) => {
  try {
    const imagesResponse = await fetch('http://localhost:3001/images/all').then(res => res.json());

    const image = imagesResponse[Math.floor(Math.random() * imagesResponse.length + 1)];

    if (image == undefined) {
      res.json({
        imageUrl: 'gallery/1.jpg'
      });
    } else {
      res.json(image);
    }
  } catch (e) {
    console.error(e, 'failed to retrieve images data');
  }
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
      label: "New Joiner",
      value: 'Ferhat - Talen Specialist, please extend him a warm Engine Transformation welcome!',
      imageUrl: 'team-news/ferhat.jpg'
    },
    {
      label: 'ET team afternoon',
      value: 'On February 28th we will be getting together as a team to have some fun offsite.',
      imageUrl: ''
    }
  ]);
});

app.get('/overheard/all', function (req, res) {
  res.json([{
      text: "I need to get some KFC today for lunch. I’m losing weight.",
    },
    {
      text: 'Is Johan’s birthday on Christmas? No, cuz he’s not Jesus”',
    },
    {
      text: "What part of Columbia are you from?   ......I'm from Spain"
    },
    {
      text: "While smelling wine– : “I don’ t want to smell it. I just want to down it"
    },
    {
      text: "'You're going to send them by e - mail, that 's so old school - you may as well send them by post.... or carrier pigeon!"
    },
  ]);
});

app.get('/overheard/current', async (req, res) => {
  try {
    const listOfQuotes = await fetch(`${API_URL}/overheard/all`).then(res => res.json());
    const quote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length + 1)];

    if (quote == undefined) {
      res.json({
        text: 'The various quotes overheard within ET'
      });
    } else {
      res.json(quote);
    }
  } catch (e) {
    console.error(e, 'failed to retrieve quote');
  }
});

app.listen(3001, function () {
  console.log('Data being served from http://localhost:3001');
});