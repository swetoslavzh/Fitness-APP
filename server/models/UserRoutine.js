const mongoose = require('mongoose');

const userUserRoutineSchema = new mongoose.Schema({
  name: {
    required: true,
    type: mongoose.Schema.Types.String
  },
  routine: {
    required: true,
    type: Array
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const UserRoutine = mongoose.model('UserRoutine', userUserRoutineSchema);
module.exports = UserRoutine;