const User  = require("../models/User");

class UserRepository {
    async create(data){
        return await User.create(...data);
    }

    async findByEmail(email){
        return await User.findOne({
            where: {
                email: email,
                status: "Ativo"
            }
        });
    }
} 

module.exports = UserRepository;