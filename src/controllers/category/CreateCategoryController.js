import CreateCategoryService from "../../services/category/CreateCategoryService.js";

class CreateCategoryController{
    async handle(req,res){
        const {name} = req.body;  

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({name});

        return res.json(category);

    }
}

export default CreateCategoryController;