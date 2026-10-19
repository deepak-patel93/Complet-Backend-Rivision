const express = require('express');
const multer=require('multer');
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const Post=require('../models/post.model');
const uploadfile=require('./services/storage.service');

const upload=multer({
    storage:multer.memoryStorage()
});

app.post('/create/post',upload.single('image'),async(req,res)=>{

    try{
        const result=await uploadfile(req.file.buffer);
        await Post.create({
            image:result.url,
            caption:req.body.caption
        });
        res.status(200).json({
            success:true,
            message:'Post created successfully'
        })
    }
    catch(err){
        res.status(500).json({
            message:'Something went wrong',
            error:err.message
        })
    }
   

  
})
app.get('/get/posts',async(req,res)=>{
    try{
        const posts=await Post.find();
        res.status(200).json({
            success:true,
            data:posts
        })
    }
    catch(err){
        res.status(500).json({
            message:'Something went wrong',
            error:err.message
        })
    }
})
module.exports = app;
//private_Og8h0MXsEPqEU6nheCenpAbJBPg=
