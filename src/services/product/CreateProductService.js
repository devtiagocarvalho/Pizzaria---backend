// CRIAR PRODUTOS

import prismaClient from "../../prisma/index.js";


class CreateProductService{
    async execute({name, price, description, banner, category_id}){
       
        const product = await prismaClient.product.create({  // cadastrar produto no BD
            data:{
                name:name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        })

        return product;  //retornando produto cadastrado
        
    }
}


export default CreateProductService;

// pra funcionar no teste (imsonnia, Thunderbolt) tem que usar um token bearer pra logar, senão não funciona.