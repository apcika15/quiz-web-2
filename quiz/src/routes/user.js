const Router = require('express').Router
const UserController = require('../controllers/UserController');

const router = new Router();

router.get('/:id/orders', UserController.getUserOrders)
router.post('/', UserController.createUser);

module.exports = Router;