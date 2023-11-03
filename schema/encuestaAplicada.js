const mongoose = require("mongoose");

// Define el esquema para las respuestas a las preguntas
const RespuestaSchema = new mongoose.Schema({
  pregunta_id: { type: Number },
  respuesta: { type: Number },
});

// Define el esquema para la colección de encuestas aplicadas
const EncuestaAplicadaSchema = new mongoose.Schema({
  cuestionario_id: { type: mongoose.Schema.Types.ObjectId, ref: "Cuestionario" }, // Hace referencia al cuestionario aplicado
  fecha_aplicacion: { type: Date },
  empleado_id: { type: mongoose.Schema.Types.ObjectId, ref: "Persona" }, // Hace referencia a la persona que completó la encuesta
  respuestas: [RespuestaSchema], // Un array de respuestas a las preguntas
});

// Crea el modelo de datos para la colección "encuestas_aplicadas"
const EncuestaAplicada = mongoose.model("EncuestaAplicada", EncuestaAplicadaSchema);

module.exports = EncuestaAplicada;
