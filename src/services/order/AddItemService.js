import prismaClient from "../../prisma/index.js"


class AddItemService{                                        // adicionar item ao pedido
    async execute({order_id, product_id, amount}){
        const order = await prismaClient.item.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount
            }
        })
        return order;
    }
}

export default AddItemService;