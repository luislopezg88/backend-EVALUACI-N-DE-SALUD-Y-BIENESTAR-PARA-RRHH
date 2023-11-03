const express = require("express");
const EncuestaAplicada = require("../schema/respuesta");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

// Ruta para listar todas las encuestas aplicadas de un cuestionario
router.get("/:cuestionarioId", async function (req, res) {
  const cuestionarioId = req.params.cuestionarioId;
  console.log("cuestionarioId recibido:", cuestionarioId); // Agrega esta línea
  try {
    const encuestasAplicadas = await EncuestaAplicada.find({ cuestionario_id: cuestionarioId });
    console.log("Encuestas encontradas:", encuestasAplicadas); // Agrega esta línea
    res.json(
      jsonResponse(200, {
        encuestasAplicadas,
      })
    );
  } catch (err) {
    console.error("Error:", err); // Agrega esta línea
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener las encuestas aplicadas",
      })
    );
  }
});

module.exports = router;