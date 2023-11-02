const mongoose = require("mongoose");

// Define un esquema para las respuestas
const respuestaSchema = new mongoose.Schema({
  cuestionario_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fecha_aplicacion: {
    type: Date,
    required: true,
  },
  persona_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  respuestas: {
    type: [mongoose.Schema.Types.Mixed], // Define respuestas como un array de tipos mixtos
  },
});

// Define el modelo a partir del esquema
const Respuesta = mongoose.model("Respuesta", respuestaSchema);

module.exports = Respuesta;
/*

ValidationError: Respuesta validation failed: respuestas.0.respuesta: Path `respuesta` is required., respuestas.0.pregunta_id: Path `pregunta_id` is required., respuestas.1.respuesta: Path `respuesta` is required., respuestas.1.pregunta_id: Path `pregunta_id` is required., respuestas.2.respuesta: Path `respuesta` is required., respuestas.2.pregunta_id: Path `pregunta_id` is required.

como puedo solucionar este error
*/
