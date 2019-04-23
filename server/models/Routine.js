const mongoose = require('mongoose');

const RoutineSchema = new mongoose.Schema({
  name: {
    required: true,
    type: mongoose.Schema.Types.String
  },
  routine: {
    required: true,
    type: Array
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  isSample: {
    type: mongoose.Schema.Types.Boolean
  }
});

const Routine = mongoose.model('Routine', RoutineSchema);
module.exports = Routine;