const express=require('express');
const app=express();
const PORT=3090;
const ejs=require('ejs');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs=require('fs');


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
    console.log(`User Hit HomePage!`);
})
app.listen(PORT||process.env.PORT,()=>{
    console.log(`App live @ ${PORT}`)
})

app.post('/upload', upload.single('binary'), function (req, res, next) {
    const file=req.file;
    console.log(file);
  const description=req.body.description;
res.send('Posted.');
})



