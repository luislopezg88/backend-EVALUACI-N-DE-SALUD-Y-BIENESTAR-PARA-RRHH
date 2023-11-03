const express = require("express");
const Encuestas = require("../schema/respuesta");
const Cuestionarios = require("../schema/cuestionario");
const { jsonResponse } = require("../lib/jsonResponse");

const router = express.Router();

router.get("/:cuestionarioId", async function (req, res) {
  const cuestionarioId = req.params.cuestionarioId;
  try {
    const data = await Encuestas.find({
      cuestionario_id: cuestionarioId,
    })
      .populate("empleado_id", "name") // Poblar el campo 'empleado_id' y seleccionar solo el campo 'name' del modelo Empleado
      .exec();

    res.json(
      jsonResponse(200, {
        data,
      })
    );
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener las encuestas aplicadas",
      })
    );
  }
});

module.exports = router;
