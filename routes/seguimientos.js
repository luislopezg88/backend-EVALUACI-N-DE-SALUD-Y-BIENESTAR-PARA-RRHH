const express = require("express");
const router = express.Router();
const Horas = require("../schema/seguimiento");

router.get("/", async (req, res) => {
  try {
    const items = await Horas.find({ idUser: req.user.id });
    return res.json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al obtener los todos" });
  }
});

router.post("/", async (req, res) => {
  if (!req.body.fecha) {
    return res.status(400).json({ error: "Fecha  is required" });
  }

  try {
    const hora = new Horas({
      idUser: req.user.id,
      fecha: req.body.fecha,
      inicia: req.body.inicia,
      finaliza: req.body.finaliza,
      extra: req.body.extra,
    });

    const horasInfo = await hora.save();
    console.log({ horasInfo });
    res.json(horasInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear seguimiento de horas" });
  }
});

module.exports = router;
