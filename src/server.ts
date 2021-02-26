//Criando um servidor
// Formato typescript

import 'reflect-metadata';
// É necessária uma tradução para um formato que o node.js "entenda" => instalar extensão
import express from 'express';
import './database'; // Por padrão, já reconhece que o arquivo chamado é o index.ts 

const app = express();

/**
 * Main HTTP Methods
 * GET => Busca
 * POST => Salva
 * PUT => Altera
 * DELETE => Exclui
 * PATCH => Alteração específica (imagem de um user, etc...)
 */

/** Rotas */
/** se /users - http://localhost:3333/users 
 * O express já traz a request e a response
 * Método, o primeiro parametro é a rota e o segundo o tratamento da informação
*/
app.get("/", (request, response) => {
    //return response.send("Hallo, Welt");
    return response.json({ messsage: "Hallo, Welt" });
})

app.post("/", (request, response) => {
    //return response.send("Hallo, Welt");
    return response.json({ messsage: "Dados salvos com sucesso" });
})

app.listen(3333, () => console.log("Server is running!"));