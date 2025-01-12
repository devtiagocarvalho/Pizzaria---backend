import RemoveItemService from "../../services/order/RemoveItemService.js";

class RemoveItemController {
    async handle(req, res) {
        const item_id = req.query.item_id;

      
        const removeItemService = new RemoveItemService();

       
            const order = await removeItemService.execute({
                item_id,
            });
            return res.json(order);
       
    }
}

export default RemoveItemController;
