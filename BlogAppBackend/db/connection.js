const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connection established to DB');
}).catch(()=>{
    console.log('Not connected');
})