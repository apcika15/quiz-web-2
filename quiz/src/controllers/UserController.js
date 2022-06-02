const prisma = require('../registrator/prisma');

class UserController{
    static async createUser(res, req){
        const {username, password, firstname, lastname, age} = req.body;

        try{
            const user = await prisma.user.create({
                data: {
                    username : username,
                    password : password,
                    firstname : firstname,
                    lastname : lastname,
                    age : age
                }
            });

            res.status(200).json({ data: user });
        }catch(err){
            res.status(404).json({ error: 'invalid credentials'})
        }
    }

    static async getUserOrders(req, res){
        try{
            const id = req.params.id;
            const order = await prisma.orders.findMany( {where: { userId: Number(id)}, select : {id: true ,ordertime : true, products: true}});
            res.status(200).json({data: order})
        }catch(err){
            res.status(500).send()
        }
    }
}

module.exports = UserController