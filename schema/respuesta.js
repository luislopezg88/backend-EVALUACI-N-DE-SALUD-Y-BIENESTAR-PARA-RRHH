const mongoose = require("mongoose");

// Define un esquema para las respuestas
const respuestaSchema = new mongoose.Schema({
  cuestionario_id: {
    type: mongoose.Schema.Types.ObjectId, // En este ejemplo, asumimos que es una referencia a la colección de cuestionarios
    required: true,
  },
  fecha_aplicacion: {
    type: Date,
    required: true,
  },
  persona_id: {
    type: mongoose.Schema.Types.ObjectId, // En este ejemplo, asumimos que es una referencia a la colección de personas
    required: true,
  },
  respuestas: [
    {
      pregunta_id: {
        type: Number, // Puedes usar ObjectId si prefieres
        required: true,
      },
      respuesta: {
        type: Number, // El tipo de datos para las respuestas depende de tu aplicación
        required: true,
      },
    },
  ],
});

// Define el modelo a partir del esquema
const Respuesta = mongoose.model("Respuesta", respuestaSchema);

module.exports = Respuesta;