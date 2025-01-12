// BIBLIOTECA RESPONSÁVEL POR ENVIO DE IMAGENS PARA O BD
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Converte o `import.meta.url` para o caminho de diretório
const __dirname = dirname(fileURLToPath(import.meta.url));


import multer from 'multer'
import crypto from 'crypto' // criar hash para criptografar as imagens
import { clear } from 'console';


export default {
    upload(folder){
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),  //caminho da pasta imagens onde quero salvar imagem
                filename: (request, file, callback)=>{
                    const filehash = crypto.randomBytes(16).toString("hex");
                    const filename = `${filehash}-${file.originalname}`  // gerando hash + nome da foto para não repetir nome de imagem

                    return callback(null, filename)
                }

            })
        }
    }
}

