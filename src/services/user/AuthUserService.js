import prismaClient from "../../prisma/index.js";
import { compare } from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;

class AuthUserService {
    async execute({ email, password }) { // Desestruturação de um objeto
        // Verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where: { email }, // Busca apenas pelo email
        });

        if (!user) {
            throw new Error("Usuário incorreto");
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Senha incorreta");
        }

        // Gerar token do usuário
        const token = sign(
            {
                name: user.name, // Dados no payload
                email: user.email,
            },
            process.env.JWT_SECRET, // Hash secreto
            {
                subject: user.id,
                expiresIn: "30d", // Validade do token
            }
        );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token,
        };
    }
}

export default AuthUserService;
