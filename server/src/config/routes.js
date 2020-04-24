const express = require('express')
const router = express.Router()

router.get('/main', (req, res) => {
  res.send('hello people')
})

router.get('/daemon', (req, res) => {
  res.send('hello cassidy')
})

module.exports = router
