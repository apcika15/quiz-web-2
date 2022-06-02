const Router = require('express').Router
const ProductsController = require('../controllers/ProductsController');

const router = new Router()

router.get('/', ProductsController.getProducts);
router.post('/', ProductsController.postProduct)
router.get('/:id', ProductsController.getProductById)

module.exports = routers;