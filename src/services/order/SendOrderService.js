import prismaClient from "../../prisma/index.js";

class SendOrderService {
    async execute ({order_id}){

        const order = await prismaClient.order.update({

            where:{
                id: order_id
            },
             // mudando o draft para False tira o pedido de 'rascunho' e envia. Draft serve pra isso em um BD. 
            data:{
                draft:false
            }
        })
        return order;
    }
    
}
export default SendOrderService;