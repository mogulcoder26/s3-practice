const express=require('express');
const app=express();
const env=require('dotenv').config();
const PORT=3090;
const ejs=require('ejs');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs=require('fs');

const {uploadToS3,downloadfromS3} = require('./s3')

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
    console.log(`User Hit HomePage!`);
})

app.get('/images/:key', async (req, res) => {
    console.log(req.params)
    const key = req.params.key
    const DATA_COLLECTED = await downloadfromS3(key)
  
    DATA_COLLECTED.pipe(res);
  })


app.post('/images', upload.single('image')/*Multer Middleware*/ , async (req, res) => {
  const file = req.file
  console.log(file)

  const result = await uploadToS3(file)
  console.log(result)
  const description = req.body.description
  res.send({imagePath: `/images/${result.Key}`})
})

app.listen(PORT||process.env.PORT,()=>{
    console.log(`App live @ ${PORT}`)
})

// app.post('/upload', upload.single('binary'), function (req, res, next) {
//     const file=req.file;
//     console.log(file);
//   const description=req.body.description;
// res.send('Posted.');
// })



