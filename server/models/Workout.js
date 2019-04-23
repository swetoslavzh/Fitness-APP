const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  name: {
    required: true,
    type: mongoose.Schema.Types.String
  },
  routine: {
    required: true,
    type: Array
  },
  workoutOverallKg: {
    required: true,
    type: mongoose.Schema.Types.Number
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: mongoose.Schema.Types.Date
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;