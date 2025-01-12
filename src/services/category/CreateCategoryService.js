import PrismaClient from "../../prisma/index.js";


// Cadastro de categoria. O Service faz o trabalho efetivo de cadastro de categoria. 

class CreateCategoryService{
  async execute({name}) {

    if(name === ''){
      throw new error ('name invalid')
    }

    const category = await PrismaClient.category.create({   //criar no banco
        data:{   // o que preciso informar na hora de criar
          name:name   
        },
        select:{  // dados para aparecerem no BD
          id: true,
          name:true
        }

    })
     
    return category;
  }
}

export default CreateCategoryService; 