const { hash } = require('bcrypt');

class CreateUserService {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({name, email, password}){
        if(!name || !email || !password){
            throw new Error("Por favor, preencha todos os campos.");
        }

        const userAlreadyExists =  await this.userRepository.findByEmail(email);
        if(userAlreadyExists){
            throw new Error("Esta email já está sendo utilizado");
        }

        const passwordHash = await hash(password, 12);

        const user = await this.userRepository.create({name, email, password: passwordHash});

        const newUser = user.get({ plain: true });
        delete newUser.password;

        return newUser;
    }
}

module.exports = CreateUserService;