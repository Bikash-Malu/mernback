const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userid:String,
    company:String,
    image: {
        data: Buffer,
        contentType: String,
        
      }
})
module.exports=mongoose.model('products',productSchema)