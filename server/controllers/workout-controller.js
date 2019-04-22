const UserRoutines = require('../models/UserRoutine');
const Workout = require('../models/Workout');
const Exercise = require('../models/Exercise');
const sharedService = require('../services/shared.service');

module.exports = {
  getWorkout: (req, res) => {
    let id = req.body.id;

    UserRoutines.findOne({_id: id})
      .then((workout) => {
        return res.status(200).json(workout);
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  },
  postWorkout: (req, res) => {
    let { name, workout, token } = req.body;
    let userId = sharedService.getId(token);
    let date = Date.now();

    for (let element in workout) {
      let exercise = workout[element],
         record = 0,
         bestSet = {};

      for (let el in exercise) {
        let set = exercise[el];
        let overallKg = set.kg * set.rep;

        if (overallKg > record) {
          record = overallKg;
          bestSet = set;
        }
      }

      Exercise.create({
        userId,
        name: element,
        rep: bestSet.rep,
        kg: bestSet.kg,
        overallKg: bestSet.rep * bestSet.kg,
        date
      });
    }

    Workout.create({ 
      name, 
      workout,
      userId,
      date
    }).then((_result) => {
      return res.status(200).json({
        success: true,
        message: 'Successfuly added workout'
      });
    }).catch((err) => {
      return res.status(404).json({
        success: false,
        message: err.message
      })
    })
  },
  getHistory: (req, res) => {
    let token = req.body.token;
    let userId = sharedService.getId(token);

    Workout.find({userId})
      .then((data) => {
        return res.status(200).json({
          success: true,
          workouts: data
        });
      }).catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  }
}