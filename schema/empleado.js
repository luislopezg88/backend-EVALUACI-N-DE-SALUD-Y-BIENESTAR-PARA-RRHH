const Mongoose = require("mongoose");
const Token = require("../schema/token");

const EmpleadoSchema = new Mongoose.Schema({
  //id: { type: Object }
  id: Mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  lastname: { type: String },
  edad: { type: String },
  sexo: { type: String },
  puestoTrabajo: { type: String },
  user_id: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "User",
    //required: true,
  },
});

EmpleadoSchema.methods.nameExists = async function (name) {
  const result = await Mongoose.model("Empleado").find({ name: name });
  return result.length > 0;
};

module.exports = Mongoose.model("Empleado", EmpleadoSchema);
