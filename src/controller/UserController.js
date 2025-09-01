const CreateUserServices  = require('../services/CreateUserService');
const UserRepository  = require("../infra/sequelize/repositories/userRepository");

class userController{
    async create(request, response){
        console.log(request.body);
        
        const {name, email, password} = request.body;
        
        const userRepository = new UserRepository(); 
        const createUserService = new CreateUserServices(userRepository);
        const user = await createUserService.execute({name, email, password});
       
        return response.status(201).json(user);
    }

    async authenticate(request, response){
        const {email, password} = request.body;

        const authenticateUserService = new AuthenticateUserService();
        const {user, token} = await authenticateUserService.execute({email, password});

        return response.json({user, token});
    }
}

module.exports = new userController;