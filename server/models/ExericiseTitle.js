const mongoose = require('mongoose');

const exerciseTitleSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },
  group: {
    type: mongoose.Schema.Types.Number,
    required: true
  }
});

const ExerciseTitle = mongoose.model('ExerciseTitle', exerciseTitleSchema);
module.exports = ExerciseTitle;