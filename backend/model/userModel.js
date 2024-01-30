const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required field"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email is Required field"]
    },
    password:{
        type:String,
        required:[true,"Password is Required field"],
        minLength:[8,"Min password lenth is 8 character"]
    },
    role:{
        type:String,
        default:"user"
    },
    degree:{
        type:String,
    },
    gratuation:{
        type:Date
    },
    location:{
        type:String,
    },
    department:{
        type:String,
    },
    skill:{
        type:String,
    },
    language:{
        type:String,
    },
    resume:{
        // type:File
    },
    avatar:{
        type:String
    }
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.generateToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}
userSchema.methods.matchPassword =  async function(oldPassword){
    return  await bcrypt.compare(oldPassword,this.password)
}

module.exports=mongoose.model("User",userSchema)