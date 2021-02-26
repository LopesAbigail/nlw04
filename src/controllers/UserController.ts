import { Request, response, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {

    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        // Criando repositório -> manipulação e comunicação com e de banco de dados
        const usersRepository = getRepository(User);

        // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            return response.status(400).json({
                error: "User already exists!"
            });
        }

        const user = usersRepository.create({
            name, email
        });

        // Await é utilizado devido ao retorno (promise) do método save
        await usersRepository.save(user)

        return response.json(user);
    }
}

export { UserController }