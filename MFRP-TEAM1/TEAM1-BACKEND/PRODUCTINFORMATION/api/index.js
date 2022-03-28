const express = require('express')
const router = express.Router()
//api/index.js
require('./routes/productinformation')(router)

module.exports = router