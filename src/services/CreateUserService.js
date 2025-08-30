const bcrypt = require('bcrypt');

class CreateUserService {
    async execute({name, email, password}){
        if(!name || !email || !password){
            throw new Error("Por favor, preencha todos os campos.");
        }

    }
}