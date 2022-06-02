const prisma = require('../registrator/prisma')

class OrdersController{
    static async handleOrder(req, res){
        try{
            const user = await prisma.user.findUnique({where : {id: req.body.userId }});
            const products = await prisma.products.findUnique ({where : {id: req.body.itemId }});
            
            if(products && user && products.quantity > 0){
               const order = await prisma.orders.create({
                  data: {
                     userId: req.body.userId,
                     productId: req.body.itemId,
                     ordertime: new Date()
                  }
               });
            
               await prisma.products.update({
                  where: {
                     id: req.body.itemId
                  },
                  data: {
                     name: products.name,
                     id: products.id,
                     price: products.price,
                     quantity: products.quantity - 1
                  }
               })
            
               res.status(201).json({data : order});
            }
            
            if(products.quantity <= 0){
               res.status(404).json({error : 'item is not found'})
            }
            
            res.status(404).json({error : "item or user does not exist"});
        }catch(err){
            res.status(500).send()
        }
    }
}

module.exports = OrdersController