import CreateProductService from "../../services/product/CreateProductService.js";

class CreateProductController{
    async handle (req, res){

        const { name,  price, description, category_id} = req.body;

        const createpdoductservice = new CreateProductService();

        if (!req.file){  //"se não tiver enviado uma foto..."
            throw new Error("Erro upload file")
        } else {

            
            const {originalname, filename} = req.file
            const banner = filename; 

       
            const product = await createpdoductservice.execute({
                name,
                 price, 
                 description, 
                 banner, 
                 category_id
                }
             );
            
            return res.json(product);
          
        }

    
    }
}



export default CreateProductController;

