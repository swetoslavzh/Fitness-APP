const mongoose = require('mongoose');
const Exercise = require('./Exercise');

const routineSchema = new mongoose.Schema({
  title: {
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