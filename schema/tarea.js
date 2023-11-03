const Mongoose = require("mongoose");

const TareaSchema = new Mongoose.Schema({
  id: { type: Object },
  name: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Date, required: true },
  completed: { type: Boolean, required: true },
  user: { 
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  }
});

module.exports = Mongoose.model("Tarea", TareaSchema);