// LISTAR CATEGORIAS    

import prismaClient from "../../prisma/index.js";


class ListCategoryService{
    async execute(){

        const category = await prismaClient.category.findMany({    //encontrar as categorias listadas
                select:{ // listar só o que quero
                    id: true,
                    name: true,
                }
        })

        return category
    }
}

    export default ListCategoryService;