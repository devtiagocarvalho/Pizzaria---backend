import RemoveOrderService from "../../services/order/RemoveOrderService.js";

class RemoveOrderController{
    async handle(req,res){
        const order_id = req.query.order_id // usado para requisições que necessitam de filtragem ou consulta. Poderia ter usado também o 'const {order_id} = req.body;'

        const removeorder = new RemoveOrderService();

        const Order = await removeorder.execute({
            order_id
        })

        return res.json(Order)

    }



}

export default RemoveOrderController;