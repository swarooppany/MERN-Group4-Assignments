const mongoose = require('mongoose');
exports.database = ()=>{
    const dbURL = "mongodb+srv://swarooppany:mymongodb123@cluster0.zfnvp68.mongodb.net/assignment9?retryWrites=true&w=majority";
    mongoose.connect(dbURL).then((result)=>{
        console.log(`Database Connected`)
    }).catch((err=>console.log(err)));
}