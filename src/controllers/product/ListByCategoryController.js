import ListByCategoryService from "../../services/product/ListByCategoryService.js";

class ListByCategoryController{
    async handle(req, res){

        const category_id = req.query.category_id;
        
        const listbycategory = new ListByCategoryService();

        const products = await listbycategory.execute({
            category_id
        });
        return res.json(products)

        }}


export default ListByCategoryController;