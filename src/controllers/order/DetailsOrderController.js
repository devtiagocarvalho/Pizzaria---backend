import DetailsOrderService from "../../services/order/DetailsOrderService.js";


class DetailsOrderController{
    async handle(req,res){

        const order_id = req.query.order_id;

        const detailorderservice = new DetailsOrderService();

        const pedidos = await detailorderservice.execute({
            order_id
        })
                return res.json(pedidos)
    }
}
export default DetailsOrderController;