const Routine = require('../models/Routine');
const Workout = require('../models/Workout');
const Exercise = require('../models/Exercise');
const mongoose = require('mongoose');
const sharedService = require('../services/shared.service');

function createExercise(userId, workoutId, workout, date) {

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
      workoutId,
      name: element,
      rep: bestSet.rep,
      kg: bestSet.kg,
      overallKg: bestSet.rep * bestSet.kg,
      date
    });
  }
}

function editExericse(workoutId, date, workout) {

  for (let element in workout) {
    let exercise = workout[element],
       record = 0,
       bestSet = {};

    for (let el in exercise) {
      let set = exercise[el];
      let overallKg = set.kg * set.rep;
      workoutOverallKg += overallKg;
      
      if (overallKg > record) {
        record = overallKg;
        bestSet = set;
      }
    }
    Exercise.update({ workoutId, date }, {
      name: element,
      rep: bestSet.rep,
      kg: bestSet.kg,
      overallKg: bestSet.rep * bestSet.kg
    });
  }
}

function deleteExericse(workoutId) {
  Exercise.deleteMany({ workoutId });
}

module.exports = {
  getRoutine: (req, res) => {
    let id = req.body.id;

    Routine.findOne({_id: id})
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
    let { name, workout, token } = req.body,
         userId = sharedService.getId(token),
         date = Date.now(),
         workoutOverallKg = 0;

    for (let element in workout) {
      let exercise = workout[element]
  
      for (let el in exercise) {
        let set = exercise[el],
            overallKg = set.kg * set.rep;

        workoutOverallKg += overallKg;
      }
    }
    Workout.create({ 
      name, 
      routine: workout,
      workoutOverallKg,
      userId,
      date
    }).then((result) => {

      createExercise(userId, result._id, workout, date);

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
          data
        });
      }).catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  },
  editWorkoutFind: (req, res) => {
    let id = req.body.id; 

    Workout.findOne({ _id: id })
      .then((data) => {
        return res.status(200).json({
          success: true,
          data
        });
      }).catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  },
  editWorkoutEdit: (req, res) => {
    let { workoutId, workout } = req.body;
    let workoutOverallKg = 0;

    for (let element in workout) {
      let exercise = workout[element]
  
      for (let el in exercise) {
        let set = exercise[el],
            overallKg = set.kg * set.rep;

        workoutOverallKg += overallKg;
      }
    }
    Workout.update({ _id: workoutId }, {
      workout,
      workoutOverallKg,
      userId,
      date
    }).then((result) => {
      let date = result.date;

      editExericse(workoutId, date, workout);

      return res.status(200).json({
        success: true,
        message: 'Workout was successfuly updated'
      });
    }).catch((err) => {
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
  },
  deleteWorkout: (req, res) => {

    let workoutId = req.params.id;

    Workout.findOneAndDelete({ _id: workoutId })
      .then((deletedRecord) => {
        deleteExericse(deletedRecord.id);

        return res.status(200).json({
          success: true,
          message: 'Workout was successfuly removed',
          data: deletedRecord
        });
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  },
  exerciseHistory: (req, res) => {
    let { name, token } = req.body;
    let userId = sharedService.getId(token);

    Exercise.find({ name, userId })
      .then((result) => {
        return res.status(200).json({
          success: true,
          data: result
        });
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        })
      });
  }
}