const mongoose=require('mongoose')
const productinformationSchema=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    price:{type:String},
    description:{type:String},
    category:{type:String},
    image:{type:String},
    rating:{type:String},
})
module.exports=mongoose.model('Productinformation',productinformationSchema)
