const mongoose = require('mongoose');

const exerciseTitleSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },
  group: {
    type: mongoose.Schema.Types.String,
    required: true
  }
});

const ExerciseTitle = mongoose.model('ExerciseNames', exerciseTitleSchema);
module.exports = ExerciseTitle;