const mongoose = require("mongoose");

const PreguntaSchema = new mongoose.Schema({
    id: { type: Object },
    pregunta: { type: String },
});

const SeccionSchema = new mongoose.Schema({
    id: { type: Object },
    nombre: { type: String },
    preguntas: [PreguntaSchema],
});

const CuestionarioSchema = new mongoose.Schema({
    id: { type: Object },
    titulo: { type: String },
    instrucciones: { type: String },
    escala: [String],
    secciones: [SeccionSchema],
});

const CuestionarioModel = mongoose.model("Cuestionario", CuestionarioSchema);

module.exports = CuestionarioModel;