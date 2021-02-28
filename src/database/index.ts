import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    // verificar se trata-se de teste ou de produção
    const defaultOptions = await getConnectionOptions();
    return createConnection(
        // Sobrescrever database
        Object.assign(defaultOptions, {
            // acessando variável de ambiente NODE_ENV
            database:
                // Se for um teste, criar banco de dados específico, caso contrário, seguir com o banco inicial
                process.env.NODE_ENV === "test"
                    ? "./src/database/database.test.sqlite"
                    : defaultOptions.database
        })
    );
};

