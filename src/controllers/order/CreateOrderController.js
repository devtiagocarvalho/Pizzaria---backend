import CreateOrderService from "../../services/order/CreateOrderService.js";

class CreateOrderController{
    async handle (req, res){
         const {table, name} = req.body;

         const createorderservice = new CreateOrderService();

         const order = await createorderservice.execute({
            table,
            name,
         });
         return res.json(order)
    }
}

export default CreateOrderController;