var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://DevikaG:Devika@cluster0.emuhexx.mongodb.net/EmployeeAssess?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected");
})
.catch((error)=>{
    console.log(error)
})