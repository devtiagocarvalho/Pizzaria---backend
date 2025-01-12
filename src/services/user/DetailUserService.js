import prismaClient from "../../prisma/index.js";

class DetailUserService {
    async execute (user_id){

        // procurar o primeiro usuáro que tenha o id igual ao que tem no 'user_id' para confirmar o id.
        const user = await prismaClient.user.findFirst({  
            where:{
                id: user_id
            },
            select:{  //selecionando o que devolver ao usuário. Prismaclient devolve tudo por padrão
                id: true,
                name: true,
                email: true,
            }

        })


        return (user)
    }
}

export default DetailUserService;