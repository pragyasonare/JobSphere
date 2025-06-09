import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"
import JWT from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
    firstName:{
    type  : String ,
    required: [true , "First name is required "],
    }
,
    lastName:{
        type  : String ,
        required: [true , "last name is required "],

    } 
    ,
    email: {
        type  : String ,
        required: [true , "email is required "],
        unique : true,
        validate : validator.isEmail
    },
    password:{
        type  : String ,
        required: [true , "password is required "],
        minlength: [6 , "password must be at least of length 6"],
        select : true ,
    },
    accountType : {type :String , default : "seeker"} ,
    contact :{type  : String},
    location :{type  : String},
    profileUrl :{type  : String},
    jobTitle :{type  : String},
    about :{type  : String},
} ,
{timestamps : true }

);

//middlewares
userSchema.pre("save" , async function() {
    if (!this.isModified)return ;

    const salt = await bcrypt.genSalt(10)

    this.password = await bcrypt.hash(this.password , salt)

});

//compare password 
userSchema.methods.comparePassword = async function(userPassword){
    const isMatch = await bcrypt.compare(userPassword , this.password);

    return isMatch ;
}

//JWT token 
userSchema.methods.createJWT =  function () {
    return JWT.sign (
        { userId : this._id},
        process.env.JWT_SECRET_KEY,{
            expiresIn :"1d",
        })
};

const Users = mongoose.model("Users" , userSchema);

export default Users ;
    
