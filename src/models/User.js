const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName:{type:String},
    fullName:{type:String},
    email: {type:String},
    phoneNumber:{type:Number},
    passwordHash:{type:String},
    comments:[{
        type: Schema.Types.ObjectId, //Para checkear
        ref:'Comment'
    }]
})

module.exports = mongoose.model('User', UserSchema)


// 62ea884ddc95f5d92dd4959f user
// 62ea8841dc95f5d92dd4959d book 