import prismaClient from "../../prisma/index.js";


class RemoveOrderService{

    async execute({order_id}){

        const order = await prismaClient.order.delete({  //delete o pedido cujo id é igual o que to enviando
            where:{
                id: order_id,
            }
        })

        return order;
    }


}

export default RemoveOrderService;