import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
},{timestamps : true});

userSchema.pre('save' , function (next){
    const user = this;
    const SALT = bcrypt.genSaltSync(10)//salt production/generation
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);//SALT is additional information added to encrypt the password
    user.password = encryptedPassword;
    next();
});

const User  = mongoose.model('User' , userSchema);

export default User;