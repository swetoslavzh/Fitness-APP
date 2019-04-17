const Routine = require('../models/Routine');
const UserRoutine = require('../models/UserRoutine');
const jwt = require('jsonwebtoken')

function validateRoutine(title, exercises) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (typeof title === 'undefined' || typeof exercises === "undefined") {
    isFormValid = false;
    errors.error = 'not all values are provided';
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

function getId(token) {
  if (typeof token === "undefined") {
    return 'token is undefined';
  }
  const decoded = jwt.decode(token, {complete: true});
  return decoded.payload.sub;
}

module.exports = {
  userGetRoutine: (req, res) => {
    const id = getId(req.body.token);

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
    const { token, routine, comment } = req.body;
    const date = Date.now();
    const id = getId(token);

    UserRoutine.create({ userID: id, routine, date, comment })
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
    const { title, exercises } = req.body;

    Routine.create({title, exercises})
      .then(() => {
        return res.status(200).json({
          success: true,
          message: 'You have successfully added a new sample routine.'
        })
      })
      .catch(() => {
        const error = "Routine with this name already exists";
        return done(error)
      }); 
  },
  sampleRoutineDELETE: (req, res) => {
    
  }
}