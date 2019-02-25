const express = require('express'),
  router = express.Router()

router.use('/gallery', require('./gallery'))
router.use('/overheard', require('./overheard'))
router.use('/reminders', require('./reminders'))
router.use('/team-news', require('./team-news'))
router.use('/weather', require('./weather'))
router.use('/wifi-passwords', require('./wifi-passwords'))

module.exports = router