const mongoose = require("mongoose")

// el modelo de mi coleccion 
const pacientesSchema = new mongoose.Schema({
  name : { type: String, required: true },
  fecha : { type: Date, default : Date.now},
  motivo: {type : Array, requiered : true},
  doctor : { type: String, required: true },
  notas : { type: String, required: true },
  img : { type: String},
},
    { versionKey: false }
);

const pacientesModel = /*mongoose.models.Pacientes ||*/ mongoose.model('Pacientes', pacientesSchema);

module.exports = pacientesModel;

//base de la cual me ayude para hacer el modelo
/*
const pacientes = 
    {
      "name" : "luis",
      "fecha" : "23-11-28",
      "motivo" : ["dolor de cabeza", "vomito", "congestion nasal"],
      "doctor" : "juan cely",
      "notas" : "covid-19",
      "img" : "https://drive.google.com/file/d/1slkgYtSGadV8exwPb0kDMNsctl1dUk1p/view?usp=sharing"
    };
*/