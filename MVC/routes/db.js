const express = require('express')
const router = express.Router()
const DBController = require('../controllers/dbController.js')

router.post('/createdb', DBController.createdb)

router.get('/createCategories', DBController.tableCategories)

router.get('/createProducts', DBController.tableProducts)


module.exports = router;