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
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
res.send('Posted.');
})

// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })

