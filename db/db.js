const mongoose = require('mongoose')

function connect(){
    mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DataBase Connected"))
    .catch((e)=>console.log(e))
}

module.exports= connect;