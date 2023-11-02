const express = require("express");
const { jsonResponse } = require("../lib/jsonResponse");
const router = express.Router();

router.get("/encuesta", async function (req, res) {
  const userId = req.params.userId;
  try {
  } catch (err) {
    return res.status(500).json(
      jsonResponse(500, {
        error: "Error al obtener la lista de empleados",
      })
    );
  }
});

module.exports = router;
