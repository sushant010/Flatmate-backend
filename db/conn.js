const mongoose = require('mongoose')

const DATABASE= process.env.DATABASE;
mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>  console.log(`connnection successful`))
    .catch((err) => console.log(err))


    // DATABASE=mongodb+srv://sushantkumarsuman007:Mongodb%4052@cluster0.izbvomz.mongodb.net/Suvico?retryWrites=true&w=majority