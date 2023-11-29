const mongoose = require('mongoose');
 // Conectar al servidor de MongoDB
 
 async function connection (){
  await mongoose.connect(process.env.URI);
  console.log("esta conectado")
 }

 module.exports = connection;
 