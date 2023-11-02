const mongoose = require("mongoose");

const PreguntaSchema = new mongoose.Schema({
  pregunta: { type: String },
});

const SeccionSchema = new mongoose.Schema({
  nombre: { type: String },
  preguntas: [PreguntaSchema],
});

const CuestionarioSchema = new mongoose.Schema({
  titulo: { type: String },
  instrucciones: { type: String },
  escala: [String],
  secciones: [SeccionSchema],
});

const CuestionarioModel = mongoose.model("Cuestionario", CuestionarioSchema);

module.exports = CuestionarioModel;