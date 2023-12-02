const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/productController.js')

router.post('/createProduct', ProductsController.create)

router.get('/products', ProductsController.getAll)

router.get('/getProduct/id/:id', ProductsController.getById)

router.get('/getProduct/name/:name', ProductsController.getByName)

router.get('/getProductsDesc', ProductsController.getByDesc)

router.get('/productosConCategorias', ProductsController.getWithCategories)

router.put('/product/id/:id', ProductsController.update)

router.delete('/deleteProduct/:id', ProductsController.delete)

module.exports = router;