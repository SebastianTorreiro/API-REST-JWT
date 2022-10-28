const mongoose = require('mongoose');
const { Schema } = mongoose;


const CartSchema = new Schema({
    name: {
        type: String,
        unique: true,
       },
    total_price:{ type: Number, min: 0, default:0},
    amount:{type: Number,  default:0},
    books:[{
        type: Schema.Types.ObjectId,
        ref:'Book'
    }],
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
   
})

module.exports = mongoose.model('Cart', CartSchema)