const express = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const log = require("../lib/trace");
const router = express.Router();
const Perfil = require("../schema/perfil");

router.get("/:userId", async function (req, res) {
  const userId = req.params.userId;
  try {
    const perfil = await Perfil.findOne({ user: userId });

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
  const { address, phone, qualification, birthdate } = req.body;
  try {
    const perfil = await Perfil.findOne({ user })
    if (!perfil) {
      const newProfile = new Perfil({ address, phone, qualification, birthdate, user });
      await newProfile.save();
      res.json(
        jsonResponse(200, {
          message: "Perfil actualizado satisfactoriamente",
        })
      );
    } else {
      perfil.address = address;
      perfil.phone = phone;
      perfil.qualification = qualification;
      perfil.birthdate = birthdate;
      await perfil.save();
      res.json(
        jsonResponse(200, {
          message: "Perfil actualizado satisfactoriamente",
        })
      );
    }
  } catch (err) {
    //console.log(err)
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error creando el empleado",
      })
    );
  }
});

module.exports = router;
