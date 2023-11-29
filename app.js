const connection = require("./conecion.js")
const disconnect = require("./conecion.js")
const Pacientes = require("./models.js")
const express = require("express")
const app = express();
const PORT = 3000
app.use(express.json());

// add middleware
const authMiddleware = require("./apikey.js")
app.use(authMiddleware)

//get  patients
app.get("/pacientes",async(req,res)=>{
    connection()
    
    const findPacientes = await Pacientes.find({});  
    console.log(findPacientes)
    
    //disconnect()
    return JSON.parse(JSON.stringify(findPacientes))
    //res.status(200).json({success: true, data : findPacientes})
})

//post a new patient
app.post("/pacientes",async(req,res)=>{
    connection()
    try{
    const createPacientes = await Pacientes.insertMany(req.body);
    console.log(createPacientes)
    res.status(200).send(createPacientes)
    }catch{
        res.status(400)
    }
    //disconnect()
    //return JSON.parse(JSON.stringify(findPacientes))
})


//call back patients (id,name)
app.get("/pacientes/delete",async(req,res)=>{
    connection()
    
    const findPacientes = await Pacientes.find({},{name : 1},{_id : 1});  
    console.log(findPacientes)
    
    //disconnect()
    return JSON.parse(JSON.stringify(findPacientes))
    //res.status(200).json({success: true, data : findPacientes})
})

//delete a patient with their id
app.delete("/pacientes/:id",async(req,res)=>{
    connection()
    const pacienteId = req.params.id
    
    try {
        //const findPacientes = await Pacientes.find({}); 
        // Realizar la eliminación utilizando el modelo de Mongoose
        const deletePaciente = await Pacientes.findByIdAndDelete(pacienteId);
    
        if (deletePaciente) {
          res.status(200).send("mensaje: Paciente eliminado exitosamente");
          res.send(findPacientes)
        } else {
          res.status(404).json("Paciente no encontrado");
        }
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al intentar eliminar el paciente', error });
      }
    
    
    return JSON.parse(JSON.stringify(findPacientes))
    //res.status(200).json({success: true, data : findPacientes})
})

app.listen(PORT, ()=>{console.log("the app is running")})

module.exports = app