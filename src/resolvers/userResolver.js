import bcrypt from 'bcrypt';
import {tryLogin} from '../util/auth';
export default {
    Query:{
        allUser: (_, args, {models}) => {
            return models.User.findAll()
        }
    },
    Mutation: {
        signup: async (_, args, {models}) => {
            const user = args;
            console.log(user);
            user.password = await bcrypt. hash(user.password, 12)
            return models.User.create(user)
        },
        login: async(_,{email, password}, {models, SECRET}) =>
            tryLogin(email, password, models, SECRET)
    }
}