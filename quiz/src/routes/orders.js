const Router = require('express').Router
const OrdersController = require("../controllers/OrdersController")

const router = new Router();

router.post("/", OrdersController.handleOrder)

module.exports = router;