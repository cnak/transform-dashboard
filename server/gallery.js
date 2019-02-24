const express = require('express'),
  router = express.Router()

router.get('/all', function (req, res) {
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

router.get('/latest', async (req, res) => {
  try {
    const imagesResponse = await fetch('http://localhost:3001/gallery/all').then(res => res.json());

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

module.exports = router