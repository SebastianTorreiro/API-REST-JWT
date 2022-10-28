const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    content: {type : String},
    rating:{ type: Number, min: 0, max: 10},
    spoiler:{type: Boolean},
    date:{type: Date},
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    book:{
        type: Schema.Types.ObjectId,
        ref:'Book'
    }
    
})

module.exports = mongoose.model('Comment', CommentSchema)
// 62ea6e79b20aefdc2ec808fc