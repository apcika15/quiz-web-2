const prisma = require('../registrator/prisma')

class ProductsController{
    static async getProducts(req, res){
        try{
            const product = await prisma.products.findMany()
            res.status(200).json({data: product})
        }catch(err){
            res.status(500).send()
        }
    }

    static async postProduct(req, res){
        try{
            const product = await prisma.products.create({
                data : { 
                    name : req.body.name, 
                    quantity : req.body.quantity,
                    price : req.body.price, 
                } 
            });
    
            res.status(200).json({data: product});
        }catch(err){
            res.status(500).send()
        }

    }
    
    static async getProductById(req, res){
        try{
            const id = req.params.id;
            const product = await prisma.products.findUnique({where: {id: Number(id)} });
            res.status(200).json({data: product})
        }catch(err){
            res.status(500).send()
        }
    }
}

module.exports = ProductsController