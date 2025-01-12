import prismaClient from "../../prisma/index.js";

class FinishOrderService {   // FINALIZAR PEDIDO
    async execute({order_id}){
        const order = prismaClient.order.update({
            where:{
                id: order_id
            },
            data:{
                status: true,    // TRUE é pedido finalizado
            }

        })
        return order;
    }

}

export default FinishOrderService;