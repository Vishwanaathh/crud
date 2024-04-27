const express=require('express');
const mongoose=require('mongoose');
const book=require('./model');
const app=express();
app.use(express.json());
app.get('/',async(req,res)=>{
    const data=await book.find({});
    res.status(200);
    res.json(data);


});
app.post('/post',async(req,res)=>{
    try {
        const user=await book.create(req.body)
        res.status(200).json()
        

        
    } catch (error) {
        console.log(error.message);
        res.status(500);
        
    }

});
app.put('/:id',async(req,res)=>{
    try{
    const { id } = req.params;
    const booka = await book.findByIdAndUpdate(id, req.body);
    res.status(200).json(booka); // Send the response with the updated book
} catch (error) {
    console.error(error.message);
    res.status(500).send('failure');
}}
);
app.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    const dbook=await book.findByIdAndDelete(id);
    res.status(200).json();

});

















mongoose
.connect('mongodb+srv://admin:root@cluster0.kwlzyeo.mongodb.net/BOOKSINFO?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{app.listen(4000,()=>{
  console.log("Listening");
})});