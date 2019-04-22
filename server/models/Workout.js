const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  name: {
    required: true,
    type: mongoose.Schema.Types.String
  },
  workout: {
    required: true,
    type: Array
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