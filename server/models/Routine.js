const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  exercises: {
    type: Array,
    required: true
  }
});

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine;