import prismaClient from "../../prisma/index.js";

class ListByCategoryService {
  async execute(category_id) {
    // Corrigindo o uso do findMany, acessando diretamente o campo category_id
    const products = await prismaClient.product.findMany({
         /*where:{
            category_id:category_id;
         }*/
      });
      return products;
  }
}

export default ListByCategoryService;
