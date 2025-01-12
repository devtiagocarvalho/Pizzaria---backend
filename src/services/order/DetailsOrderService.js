// Lista todos os detalhes do pedido: produto, quantidade, mesa, etc

import prismaClient from "../../prisma/index.js";

class DetailsOrderService{
    async execute({order_id}){

        // buscar na tabel ITEM todos atralados a ordem_id passada
        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                products: true, // incluir o produto atrelado
                order: true,   
            }
        })
            return orders;
    }
}

export default DetailsOrderService;