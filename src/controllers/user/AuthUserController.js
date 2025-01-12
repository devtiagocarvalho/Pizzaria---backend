import AuthUserService from "../../services/user/AuthUserService.js"

class AuthUserController {
    async handle(req,res){
        const {email, password} = req.body;

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({
            email,
            password
        })

        return res.json(auth)
    }
}

export default AuthUserController;


/*O AuthUserController extrai os campos email e password do req.body.
Cria uma instância de AuthUserService.
Chama o método 'execute' passando um objeto contendo email e password. */  