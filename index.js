const express = require("express");
const cors = require("cors");
require("./Config");
const User = require("./User");
const Product=require('./Product');
const multer = require("multer");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result=result.toObject();
  delete result.password
  res.send(result);
  console.log(result);
});
app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body);
    if (user) res.send(user);
    else res.send("no user found");
  }
  else res.send("no user found");
});

app.post('/addproduct',async(req,res)=>{
  let product=new Product(req.body);
  let result=await product.save();
  res.send(result);
})

app.get('/products',async(req,res)=>{
  const a=req.params.id;
  let products=await Product.find();
  if(products.length>0){
    res.send(products)
  }
  else{
    res.send("product is empty");
  }
})
app.get('/products/:userid',async(req,res)=>{
  const a=req.params.userid;
  let products=await Product.find({userid:a});
  if(products.length>0){
    res.send(products)
  }
  else{
    res.send("product is empty");
  }
})
app.get('/prod/:id',async(req,res)=>{
  const a=req.params.id;
  let products=await Product.find({_id:a});
  if(products.length>0){
    res.send(products)
  }
  else{
    res.send("product is empty");
  }
})
app.delete('/:id',async(req,res)=>{
const a=req.params.id;
let item=await Product.deleteOne({_id:a})
res.send('delete');
})
app.put('/update/:id',async(req,res)=>{
  const a=req.params.id;
  const b=req.body;
  let result=await Product.updateOne({_id:a},{$set:b})
  res.send(result);
})
app.get('/:key',async(req,res)=>{
const a=req.params.key;
let data=await Product.find({
    "$or":[
        {"name":{$regex:a}}
    ]
})
console.log(data)
res.send(data)
})
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"Views")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpeg")
        }
    })
}).single("user_file")
app.post('/upload',upload,(req,res)=>{
    res.send("file upload")
})
app.listen(1200);
