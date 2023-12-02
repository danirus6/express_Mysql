const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/categoryController.js')

router.post('/createCategory', CategoryController.create)

router.get('/categories', CategoryController.getAll)

router.get('/getCategory/id/:id', CategoryController.getById)

router.put('/category/id/:id', CategoryController.update)

router.delete('/deleteCategory/:id', CategoryController.delete)

module.exports = router;