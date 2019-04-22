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

    for (let exercise of routine) {
      let setsArr = [];
      let exerciseKey = sharedService.generateAcronym(exercise.exerciseName);

      for (let i = 0; i < exercise.sets; i++) {
        setsArr.push({
          "value": `${exerciseKey}${i}`,
          "kg": `${exerciseKey}${i}_kg`,
          "rep": `${exerciseKey}${i}_rep`
        });
      }
      exercise.sets = setsArr;
    }

    UserRoutine.create({ userID: id, name, routine })
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
    const { name, routine } = req.body;

    Routine.create({name, routine })
      .then((_data) => {
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