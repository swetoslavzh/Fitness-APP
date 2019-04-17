const Routine = require('../models/Routine');
const UserRoutine = require('../models/UserRoutine');
const sharedService = require('../services/shared.service');

module.exports = {
  userGetRoutine: (req, res) => {
    const id = sharedService.getId(req.body.token);

    UserRoutine.find({userID: id})
      .then((routines) => {
        return res.status(200).json(routines);
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        })
      })
  },
  userAddRoutine: (req, res) => {
    const { token, name, routine } = req.body;
    const id = sharedService.getId(token);
    let arrOfExercises = [];

    for (let item of routine) {
      arrOfExercises.push(item.exerciseName);
    }

    UserRoutine.create({ userID: id, name, routine: arrOfExercises })
      .then(() => {
        return res.status(200).json({
          success: true,
          message: 'You have successfully added a new routine.'
        })
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      }); 
  },
  userRoutineDELETE: (req, res) => {
    
  },
  sampleRoutineGET: (req, res) => {
    Routine.find()
      .then((routines) => {
        return res.status(200).json(routines);
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: 'Error occured'
        });
      });
  },
  sampleRoutinePOST: (req, res) => {
    const { name, exercises } = req.body;

    Routine.create({name, exercises})
      .then(() => {
        return res.status(200).json({
          success: true,
          message: 'You have successfully added a new sample routine.'
        })
      })
      .catch((err) => {
        return res.status(200).json({
          success: false,
          message: err.message
        });
      }); 
  },
  sampleRoutineDELETE: (req, res) => {
    
  }
}