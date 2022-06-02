const express = require('express');
const userRouter = require('./routes/user')
const productRouter = require('./routes/products')
const orderRouter = require('./routes/orders')
const app = express();

app.use(express.json())

app.use('/user',userRouter);
app.use('/products',productRouter);
app.use('/order',orderRouter);

app.listen(8080, (req, res) => {
    console.log('listening on http://localhost:8080');
})