const express = require("express");
const Cuestionario = require("../schema/cuestionario");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

// Ruta para listar todos los cuestionarios
router.get("/", async function (req, res) {
  try {
    const cuestionario = await Cuestionario.find(); // Busca todos los cuestionarios en la base de datos

    res.json(
      jsonResponse(200, {
        cuestionario,
      })
    );
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener la lista de cuestionarios",
      })
    );
  }
});

router.get("/:_id", async function (req, res) {
  const cuestionarioId = req.params._id;
  //console.log(cuestionarioId)
  try {
    const cuestionario = await Cuestionario.findOne({ _id: cuestionarioId });

    res.json(
      jsonResponse(200, {
        cuestionario,
      })
    );
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener el cuestionario",
      })
    );
  }
});

module.exports = router;
