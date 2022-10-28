import User from '../models/User'

export const singUp = async (req, res) =>{
    const { username, email, password } = req.body
}


export const singIn = async (req, res) =>{
    res.json('singupo')
}