import ListOrdersService from "../../services/order/ListOrdersService.js";

class ListOrdersController{
    async handle(req, res){
        const listOrderService = new ListOrdersService();
        const orders = await listOrderService.execute();
        
        return res.json(orders);
    }
}

export default ListOrdersController;