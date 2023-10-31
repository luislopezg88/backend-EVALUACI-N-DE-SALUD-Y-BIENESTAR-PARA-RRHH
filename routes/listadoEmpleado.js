const express = require("express");
const Empleado = require("../schema/empleado");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

// Ruta para listar todos los empleados
router.get("/", async function (req, res) {
  try {
    const empleado = await Empleado.find(); // Busca todos los empleados en la base de datos

    res.json(
      jsonResponse(200, {
        empleado,
      })
    );
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener la lista de empleados",
      })
    );
  }
});

module.exports = router;