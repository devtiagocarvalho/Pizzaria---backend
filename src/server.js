import express from 'express';
import 'express-async-errors';
import router  from "./router.js";
const app = express();
import cors from 'cors';
import path from 'path'
app.use(express.json());

app.use(router);

app.use(
    '/files',
    express.static(path.resolve("../imagens")) // caminho relativo ao diretório atual . basta usar: http://localhost:3333/files/NOME DA IMAGEM.PNG
);

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        res.status(400).json({
            error: err.message, 
        });
    } else {
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

app.listen(3333, ()=> console.log("servidor rodando") )

