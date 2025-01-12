import prismaClient from "../../prisma/index.js";
import {hash} from 'bcrypt'


class CreateUserService{
    async execute({name, email, password}){   //método 'execute' recebenedo os dados de CrateUserController

        // verificar se o usuário enviou email
        if (!email){
            throw new Error ("E-mail incorreto")
        }
        // verificar se e-mail já está cadastrado 
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{email:email}
        })

        if(userAlreadyExists){
            throw new Error ("usuário já existe")
        }

        const passwordHash = await hash(password,8) // antes de criar usuário, encriptografa a senha

        //após as verificações, criar usuário
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{    // escolhendo o que quer retornar para o usuário para não retornar o password
                id: true,
                name: true,
                email: true,

            }
        })



        return user;

    }



}

export default CreateUserService;