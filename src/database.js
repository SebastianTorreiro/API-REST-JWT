import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/api-db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('db is connected'))
    .catch(e => console.log(e))