const Mongoose = require("mongoose");

const PuestoSchema = new Mongoose.Schema({
  id: { type: Object },
  name: { type: String, required: true },
});

module.exports = Mongoose.model("Puesto", PuestoSchema);