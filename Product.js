const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
    name:{
type:String,
default:"xyz"
    },
    price:{
type:String,
default:"10"
    },
    userid:{
type:String,
default:"12334"
    },
    company:{
type:String,
default:"abc"
    },
    
category:{
type:String,
default:"abc"
    },
})
module.exports=mongoose.model('products',productSchema)