const mongoose = require("mongoose");

// Define un esquema para las respuestas
const EncuestaAplicadaSchema = new mongoose.Schema({
  cuestionario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cuestionarios",
    //required: true,
  },
  fecha_aplicacion: {
    type: Date,
    //required: true,
  },
  empleado_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Empleados",
    //required: true,
  },
  respuestas: {
    type: [mongoose.Schema.Types.Mixed], // mongoose.Schema.Types.Mixed - Define respuestas como un array de tipos mixtos
  },
  seleccion_satifaccion: { type: String, required: true },
  texto_satifaccion: { type: String, required: true },
  imagenes: { type: Array, required: true },
});

// Define el modelo a partir del esquema
const Respuesta = mongoose.model("Respuesta", EncuestaAplicadaSchema);

module.exports = Respuesta;
/*

ValidationError: Respuesta validation failed: respuestas.0.respuesta: Path `respuesta` is required., respuestas.0.pregunta_id: Path `pregunta_id` is required., respuestas.1.respuesta: Path `respuesta` is required., respuestas.1.pregunta_id: Path `pregunta_id` is required., respuestas.2.respuesta: Path `respuesta` is required., respuestas.2.pregunta_id: Path `pregunta_id` is required.

como puedo solucionar este error
*/
