const mongoose = require('mongoose');

const userUserRoutineSchema = new mongoose.Schema({
  routine: Object,
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: mongoose.Schema.Types.Date,
    required: true
  },
  comment: {
    type: mongoose.Schema.Types.String,
    required: false
  }
});

const UserRoutine = mongoose.model('UserRoutine', userUserRoutineSchema);
module.exports = UserRoutine;