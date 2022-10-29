import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config'
import Role from '../models/Role';


export const singUp = async (req, res) =>{
    const { username, email, password, roles } = req.body
    
    // const userFound = User.find({email})

    const userCreate = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        userCreate.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name:'user'})
        userCreate.roles = [role._id]
    }

    const userSaved = await userCreate.save();
    console.log(userSaved)
    const token = jwt.sign({id : userSaved._id}, config.SECRET, {
        expiresIn: 86400 // 24hs
    })


    res.status(200).json({token})
}


export const singIn = async (req, res) =>{
    res.json('singupo')
}