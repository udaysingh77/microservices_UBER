const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports.register = async(req,res) =>{
    try {
        const {name, email, password } = req.body;
        const user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({message:"User not Found"})
        }

        const hash = await bcrypt.hash(password,10);
        const newUser = new userModel({name,email,password:hash})
        await newUser.save();
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:"1D"})
        res.cookie('token',token);
        res.send({message:"User regidtered successfully"})
    } catch (error) {
        console.log(error);
    }
}
