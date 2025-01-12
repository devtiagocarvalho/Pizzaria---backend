import prismaClient from "../../prisma/index.js";


class RemoveItemService{
    async execute({item_id}){
        const order = await prismaClient.item.delete({

            where:{   // delete onde o Id fornecido seja igual o Item_id
                id: item_id
            }     

        })
            return order;
    }
}

export default RemoveItemService;