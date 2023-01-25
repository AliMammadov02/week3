const cors = require("cors")
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

dotenv.config()

const { Schema } = mongoose

const productSchema=new Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
})


const Product =mongoose.model("product",productSchema)

const app=express()
app.use(cors())
app.use(bodyParser.json())

// get All users
app.get("/product",(req,res)=>{
    Product.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(404).json({message:err})
        }
    })
})


//get by id
app.get("/product/:id",(req,res)=>{
    const {id}=req.params
    Product.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:err})
            }
        }else{
            res.status(500).json({message:"server lost"})
        }
    })
})

//create new product
app.post("/product",(req,res)=>{
    const product=new Product({
        imageUrl:req.body.imageUrl,
        name:req.body.name,
        price:req.body.price
    })
    product.save()
    res.send("create new product")
})

app.delete("/product/:id",(req,res)=>{
    const {id}=req.params
    Product.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("product deleted")
        }else{
            res.status(404).json({message:err})
        }
    })
})




const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set("strictQuery",true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("db connected");
        app.listen(PORT,()=>{
            console.log("SERVER START");
        })
    }
})