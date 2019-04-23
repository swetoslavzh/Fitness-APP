const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  workoutId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  rep: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  kg: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  overallKg: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  date: {
    type: mongoose.Schema.Types.Date,
    required: true
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;