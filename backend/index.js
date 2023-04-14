const express=require('express');

const cors=require("cors");
require("./db/config");

const user=require("./db/user");

const product=require('./db/product');

const app=express();

app.use(express.json());


app.use(cors());
app.post("/register",async function(req,res)
{
    console.log(req.body);
    const user1=new user(req.body);
    const result= await user1.save();
    res.send(result);
});

app.post("/login",async function(req,res){
    console.log(req.body);
    if(req.body.email && req.body.password){
   let result=await user.findOne(req.body).select("-password");
   if(result)
   {
    res.send(result);
   }
   else{
    res.send({result:'no user found'});
   }
}
else{
    res.send({result:'no user found'});
}
});

app.post('/add-product',async function(req,res){

    const product1=new product(req.body);

    const result= await product1.save();

    console.log(result);
    res.send(result);
})

app.get("/",function(req,res)
{
    res.send("hello");
});

app.get("/products",async function(req,res){
    const products= await product.find();
    
    if(products.length>0)
    {
        res.send(products);
    }
    else{
        res.send({result:"no product found"});
    }
});


app.delete("/product/:id",  async function(req,res){
 
    const result=await product.deleteOne({_id:req.params.id})
    res.send(result);
});

app.get("/product/:id",async function(req,res){
    const result= await product.findOne({_id:req.params.id});

    if(result)
    {
        res.send(result);
    }
    else{
        res.send({result:"no user found"});
    }
});

app.put("/product/:id",async function(req,res){
    let result=await product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        });
        res.send(result);
});

app.get("/search/:key",async function(req,res){
    let result=await product.find({
        "$or":[
            {name:{$regex: req.params.key}},
            {category:{$regex: req.params.key}},
            {company:{$regex: req.params.key}}
          
        ]
    });
    console.log(result);
    res.send(result);
});

app.listen(5000,function(err)
{
    if(!err)
    {
        console.log("working server")
    }
});