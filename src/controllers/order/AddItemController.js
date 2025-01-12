import AddItemService from "../../services/order/AddItemService.js"


class AddItemController{
    async handle (req, res){
        const {order_id, product_id, amount} = req.body

        const addItem = new AddItemService()

        const order = await addItem.execute({
            order_id, 
            
            product_id, amount
        })
         return res.json(order)

    }


}

export default AddItemController;