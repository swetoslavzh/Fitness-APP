const express = require('express')
const controllers = require('../controllers');

const router = new express.Router()

router.post('/auth/register', controllers.users.registerPost);
router.post('/auth/login', controllers.users.loginPost);

router.post('/routine', controllers.routine.sampleRoutinePOST);
router.get('/routine', controllers.routine.sampleRoutineGET);

router.post('/user/addRoutine', controllers.routine.userAddRoutine);
router.post('/user/getRoutine', controllers.routine.userGetRoutine);

router.post('/user/sampleRoutines', controllers.routine.sampleRoutinePOST);
router.get('/user/sampleRoutines', controllers.routine.sampleRoutineGET);

router.post('/workout/addExercise', controllers.exercise.exercisePOST);
router.get('/workout/exerciseNames', controllers.exercise.exerciseNamesGET);
router.post('/workout/getWorkout', controllers.workout.getWorkout);
router.post('/workout/postWorkout', controllers.workout.postWorkout);
router.post('/workout/history', controllers.workout.getHistory);

module.exports = router;