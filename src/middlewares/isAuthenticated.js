// usar sempre em rota privada para validar o token
// midlleware de validação de token

import pkw from 'express';
const {NextFunction, Request, Response} = pkw;

import pkg from 'jsonwebtoken';
const { verify } = pkg;

export default function isAuthenticated(req,res,next){
        
    //receber token
    const authToken = req.headers.authorization; //token sempre vem no req.headers.autorization.

    if(!authToken){
        return res.status(401).end()
    }

   const [, token] = authToken.split(" ") //forma de receber somente o token sem o "bearer" que o nomeia
   const cleanToken = token.replace(/"/g, ""); // Remove aspas do token - com aspas dá ruim

   //Validar token do usuário
   try {
    const payload = verify(
        cleanToken, 
        process.env.JWT_SECRET);

   
    req.user_id = payload.sub; // Disponibiliza o ID do usuário


    return next();
} catch (error) {
    console.error("Erro na validação do token:", error.name, error.message);
    return res.status(401).json({ error: "Token inválido." });
}
}



//MIDDLEWARE de verificação. Ele fica dentro da rota GET analisando se deixa prosseguir na solicitação ou não. Ele é chamado antes de finalizar
