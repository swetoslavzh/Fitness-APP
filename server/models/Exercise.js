const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  reps: {
    type: mongoose.Schema.Types.Number,
    required: true
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;