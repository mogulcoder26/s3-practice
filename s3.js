const S3=require('aws-sdk/clients/s3');

require('dotenv').config();

const fs=require('fs');

const bucketName=process.env.AWS_BUCKET_NAME;
const region =process.env.AWS_BUCKET_REGION;
const accessKeyId=process.env.AWS_ACCESS_KEY;
const secretAccessKey=process.env.AWS_SECRET_KEY;

const s3= new S3({
    region,
    accessKeyId,
    secretAccessKey

})

//upload a file from express server to s3 bucket

const uploadToS3=(file)=>{
    
    const fileStream=fs.createReadStream(file.path)

    const uploadParams={
        Bucket:bucketName,
        Body:fileStream,
        Key:file.filename
    }

    return s3.upload(uploadParams).promise()
}





//download a file from s3 bucket to express server

const downloadfromS3=(key)=>{

    const downloadParams={
        Bucket:bucketName,
        Key:key
    }
   
  return  s3.getObject(downloadParams).createReadStream();
}

module.exports = {uploadToS3,downloadfromS3};