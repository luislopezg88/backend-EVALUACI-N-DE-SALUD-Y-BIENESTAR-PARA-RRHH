const express = require("express");
const EncuestaAplicada = require("../schema/encuestaAplicada");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

// Ruta para listar todas las encuestas aplicadas
router.get("/", async function (req, res) {
  try {
    const encuestasAplicadas = await EncuestaAplicada.find(); // Busca todas las encuestas aplicadas en la base de datos

    res.json(
      jsonResponse(200, {
        encuestasAplicadas,
      })
    );
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener la lista de encuestas aplicadas",
      })
    );
  }
});

module.exports = router;