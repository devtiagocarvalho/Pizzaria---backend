// ListOrdersService.js
import prismaClient from "../../prisma/index.js";

class ListOrdersService{
    async execute(){
        const orders = await prismaClient.order.findMany({ //buscar todos pedidos com Draft:false
            where:{
                draft: false,
                status: false, // pedidos concluídos   -DRAFT:true são os rascunhos
            },
            orderBy:{
                created_at: 'desc' //ordenar em ordem de criação
            }
        })
        
        return orders;
    }
}

export default ListOrdersService;