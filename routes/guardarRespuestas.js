const express = require("express");
const Respuesta = require("../schema/respuesta"); // Ajusta la importación según tu estructura de datos
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { cuestionario_id, fecha_aplicacion, persona_id, respuestas } = req.body;

  if (!cuestionario_id || !persona_id || !respuestas) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Faltan datos obligatorios",
      })
    );
  }
  console.log('antes try')
  try {
    console.log('entro try')
    const respuesta = new Respuesta({ cuestionario_id, fecha_aplicacion, persona_id, respuestas });

    // Guarda la respuesta en la base de datos
    respuesta.save();

    res.json(
      jsonResponse(200, {
        message: "Respuestas guardadas satisfactoriamente",
      })
    );
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al guardar las respuestas 2",
      })
    );
  }
});

module.exports = router;