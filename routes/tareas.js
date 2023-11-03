const express = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const log = require("../lib/trace");
const router = express.Router();
const Tarea = require("../schema/tarea");

router.get("/byUser/:userId", async function (req, res) {
  const userId = req.params.userId;
  try {
    const perfil = await Tarea.findOne({ user: userId }).populate('user');
    res.json(
      jsonResponse(200, {
        perfil,
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

router.get("/user/:userId/date/:date", async function (req, res) {
  const userId = req.params.userId;
  const data = req.params.date;
  try {
    const perfil = await Tarea.findOne({ user: userId, created: date }).populate('user');
    res.json(
      jsonResponse(200, {
        perfil,
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

router.post("/save/:userId", async function (req, res, next) {
  const user = req.params.userId;
  const { name, description, birthdate, completed } = req.body;
  try {
    const tarea = await Perfil.findOne({ user })
    if (!tarea) {
      const newTarea = new Tarea({ name, description, created: new Date(), completed: false, user });
      await newTarea.save();
      res.json(
        jsonResponse(200, {
          message: "Tarea actualizada satisfactoriamente",
        })
      );
    } else {
      tarea.name = name;
      tarea.description = description;
      tarea.completed = completed;
      await tarea.save();
      res.json(
        jsonResponse(200, {
          message: "Tarea actualizada satisfactoriamente",
        })
      );
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error creando el empleado",
      })
    );
  }
});

module.exports = router;