const express = require("express");
const Encuestas = require("../schema/respuesta");
const Cuestionarios = require("../schema/cuestionario");
const Empleado = require("../schema/empleado");
const { jsonResponse } = require("../lib/jsonResponse");

const router = express.Router();

router.get("/:cuestionarioId", async function (req, res) {
  const cuestionarioId = req.params.cuestionarioId;
  try {
    const data = await Encuestas.find({
      cuestionario_id: cuestionarioId,
    });

    const empleados = await Empleado.find({});

    res.json(
      jsonResponse(200, {
        data,
        empleados,
      })
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener las encuestas aplicadas",
      })
    );
  }
});

module.exports = router;
