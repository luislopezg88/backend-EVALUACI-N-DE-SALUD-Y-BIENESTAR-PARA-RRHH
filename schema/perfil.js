const Mongoose = require("mongoose");

const PerfilSchema = new Mongoose.Schema({
  id: { type: Object },
  address: { type: String },
  phone: { type: String },
  qualification: { type: String },
  birthdate: { type: Date },
  user: { 
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  }
});

module.exports = Mongoose.model("Perfil", PerfilSchema);