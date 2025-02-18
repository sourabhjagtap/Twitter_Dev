import { UserRepository } from '../repository/index.js';
class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }
    async signup(data){
        console.log('from user service 1', data);
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

export default UserService;