import SendOrderService from "../../services/order/SendOrderService.js";

class SendOrderController{
    async handle (req,res){
        const {order_id} = req.body;
        const sendorderservice = new SendOrderService();
        const order = await sendorderservice.execute({
            order_id
        })

        return res.json(order)
    }


}

export default SendOrderController;