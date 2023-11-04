const express = require("express");
const router = express.Router();
const Horas = require("../schema/seguimiento");

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ error: "Error al obtener los todos" });
  }
});

router.post("/", async (req, res) => {
  if (!req.user.seleccion) {
    return res.status(400).json({ error: "Seleccion es requerida" });
  }

  try {
    const hora = new Horas({
      idUser: req.user.seleccion,
      fecha: req.body.texto,
    });

    const horasInfo = await hora.save();
    //console.log({ horasInfo });
    res.json(horasInfo);
  } catch (error) {
    //console.log(error);
    res.status(500).json({ error: "Error al crear seguimiento de horas" });
  }
});

module.exports = router;
