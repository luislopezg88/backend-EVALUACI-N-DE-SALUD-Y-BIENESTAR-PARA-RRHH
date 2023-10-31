const express = require("express");
const Empleado = require("../schema/empleado");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { name, lastname, edad, sexo, puesto } = req.body;

  if (!name || !lastname) {
    //return next(new Error("username and password are required"));
    return res.status(409).json(
      jsonResponse(409, {
        error: "name and lastname are required",
      })
    );
  }

  try {
    const empleado = new Empleado();
    const empleadoExists = await empleado.nameExists(name);

    if (empleadoExists) {
      return res.status(409).json(
        jsonResponse(409, {
          error: "Empleado ya existe",
        })
      );
      //return next(new Error("Empleado already exists"));
    } else {
      const empleado = new Empleado({ name, lastname, edad, sexo, puesto });

      empleado.save();

      res.json(
        jsonResponse(200, {
          message: "Empleado creado satisfactoriamente",
        })
      );
    }
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error creando el empleado",
      })
    );
    //return next(new Error(err.message));
  }
});

module.exports = router;