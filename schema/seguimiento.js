const Mongoose = require("mongoose");

const HorasSchema = new Mongoose.Schema({
  id: { type: Object },
  idUser: { type: String, required: true },
  fecha: { type: String, required: true },
  inicia: { type: String, required: true },
  finaliza: { type: String, required: true },
  extra: { type: String, required: false },
});

module.exports = Mongoose.model("Horas", HorasSchema);
