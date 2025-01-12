import prismaClient from "../../prisma/index.js";

class CreateOrderService{
    async execute({table,name}){

        const order = await prismaClient.order.create({
            data:{
                table: table,
                name: name
            }
        })
            return order;
    }
}

export default CreateOrderService;