const express = require('express'),
  router = express.Router();

const path = require('path');
const dir = path.join(__dirname, 'public/gallery');

router.use('/gallery-image/', express.static(dir));
router.use('/gallery/', require('./gallery'));
router.use('/overheard', require('./overheard'));
router.use('/reminders', require('./reminders'));
router.use('/team-news', require('./team-news'));
router.use('/weather', require('./weather'));
router.use('/wifi-passwords', require('./wifi-passwords'));
router.use('/transport-manchester', require('./transport-manchester'));
router.use('/transport-manchester', require('./transport-manchester'));
router.use('/birthdays', require('./birthdays'));

module.exports = router;
