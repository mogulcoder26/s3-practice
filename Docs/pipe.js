
// Node.js program to demonstrate the    
// readable.pipe() method
  
// Accessing fs module
var fs = require("fs");
 
// Create a readable stream
var readable = fs.createReadStream('input.txt');
 
// Create a writable stream
var writable = fs.createWriteStream('output.txt');
 
// Calling pipe method
readable.pipe(writable);
 
console.log("Program Ended");