const Mongoose = require("mongoose");
const Token = require("../schema/token");

const EmpleadoSchema = new Mongoose.Schema({
  //id: { type: Object }
  id: Mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
  lastname: { type: String, required: true },
  edad: { type: String, required: true },
  sexo: { type: String, required: true },
  puesto: { type: String, required: true },
});

EmpleadoSchema.methods.nameExists = async function (name) {
  const result = await Mongoose.model("Empleado").find({ name: name });
  return result.length > 0;
};

module.exports = Mongoose.model("Empleado", EmpleadoSchema);
