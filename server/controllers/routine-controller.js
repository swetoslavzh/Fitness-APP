const Routine = require('../models/Routine');
const sharedService = require('../services/shared.service');

module.exports = {
  userGetRoutine: (req, res) => {
    const id = sharedService.getId(req.body.token);

    Routine.find({userId: id})
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

    Routine.create({ userId: id, name, routine })
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
  sampleRoutineGET: (req, res) => {
    Routine.find({isSample: true})
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

    Routine.create({ name, routine, isSample: true })
      .then(() => {
        return res.status(200).json({
          success: true,
          message: 'You have successfully added a new sample routine.'
        })
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      }); 
  },
  editRoutine: (req, res) => {
    let routineId = req.body.routineId;

    Routine.findOne({_id: routineId})
      .then((routine) => {
        return res.status(200).json({routine})
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  },
  deleteRoutine: (req, res) => {
    let id = req.params.id;

    Routine.findOneAndDelete({ _id: id })
      .then((_data) => {
        return res.status(200).json({
          success: true,
          message: 'Routine was successfuly deleted'
        })
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  }
}