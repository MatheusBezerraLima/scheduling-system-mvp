const { CreateUserServices } = require('../services/CreateUserService');

class userController{
    async create(request, response){
        const {name, email, password} = request.body;
        
        const createUserService = new CreateUserServices();
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