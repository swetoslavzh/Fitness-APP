const ExerciseName = require('../models/ExericiseName');

module.exports = {
  exerciseGET: (req, res) => {

  },
  exercisePOST: (req, res) => {
    const { token, exerciseName, group } = req.body;

    ExerciseName.create({name: exerciseName, group})
      .then(() => {
        return res.status(200).json({
          success: true,
          message: 'You have successfully added a new exercise.'
        });
      })
      .catch((err) => {
        return res.status(404).json({
          success: true,
          message: err.message
        });
      })
  },
  exerciseNamesGET: (req, res) => {
    ExerciseName.find()
      .then((data) => {
        const groups = Array.from( new Set(data.map(data => data.group)) );
        let exerciseGrouped = {};

        for (let group of groups) {
          exerciseGrouped[group] = data.filter(e => e.group == group);
        }
        
        return res.status(200).json({
          success: true,
          data: exerciseGrouped
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
