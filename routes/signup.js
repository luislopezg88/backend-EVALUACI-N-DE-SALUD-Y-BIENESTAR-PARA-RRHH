const express = require("express");
const User = require("../schema/user");
const Empleado = require("../schema/empleado");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.post("/", async function (req, res, next) {
  const { email, username, name, password, edad, sexo, puestoTrabajo, tipo } = req.body;
  //console.log('body', req.body)

  if (!email || !password) {
    //return next(new Error("email and password are required"));
    //console.log('caso1')
    return res.status(409).json(
      jsonResponse(409, {
        error: "email and password son obligatorios",
      })
    );
  }

  try {
    const user = new User();
    const userExists = await user.usernameExists(email);
    //console.log('caso2 userExists', userExists)
    if (userExists) {
      return res.status(409).json(
        jsonResponse(409, {
          error: "email ya existe",
        })
      );
      //return next(new Error("user email exists"));
    } else {
      const user = new User({ email, username, name, password, edad, sexo, puestoTrabajo, tipo });
      user.save();

      if(tipo === 'employee'){
        //GUARDAR EMPLEADO
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
            const empleado = new Empleado({ name, edad, sexo, puestoTrabajo });

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
      }
      

      //console.log('caso3 todo bien')
      res.json(
        jsonResponse(200, {
          message: "Usuario creado satisfactoriamente",
        })
      );
    }
  } catch (err) {
    //console.log('caso4 pcurrio un error')
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error creando el usuario",
      })
    );
    //return next(new Error(err.message));
  }
});

module.exports = router;
