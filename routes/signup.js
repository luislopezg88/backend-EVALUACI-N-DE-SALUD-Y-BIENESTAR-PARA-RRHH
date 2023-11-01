const express = require("express");
const User = require("../schema/user");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { email, name, password, edad, sexo, puestoTrabajo } = req.body;

  if (!email || !password) {
    //return next(new Error("email and password are required"));
    return res.status(409).json(
      jsonResponse(409, {
        error: "email and password son obligatorios",
      })
    );
  }

  try {
    const user = new User();
    const userExists = await user.usernameExists(email);

    if (userExists) {
      return res.status(409).json(
        jsonResponse(409, {
          error: "email ya existe",
        })
      );
      //return next(new Error("user email exists"));
    } else {
      const user = new User({ email, name, password, edad, sexo, puestoTrabajo });
      user.save();

      res.json(
        jsonResponse(200, {
          message: "Usuario creado satisfactoriamente",
        })
      );
    }
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error creando el usuario",
      })
    );
    //return next(new Error(err.message));
  }
});

module.exports = router;
