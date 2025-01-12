//O controller vai receber e trabalhar as requisição de criar usuário
//Ele recebe os dados conforme formatado no schema e manda para o service usar de fato. arquivo CreateServicejs interage com o BD

import CreateUserService from "../../services/user/CreateUserService.js"


class CreateUserController {
    async handle(req, res){       //handle é o método criado para "pegar" dados do usuário e retornar algo
        const {name, email, password} = req.body; //pegando da requisição JSON
        
        const createUserService = new CreateUserService();  //colocando minha classe importada numa variável para poder executar o método 'execute()'

        const user = await createUserService.execute({name, email, password})  //guardando execute numa variável e repassando os dados para o serviço.

        return res.json(user)
    }
}

export default CreateUserController;