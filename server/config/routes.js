const express = require('express')
const controllers = require('../controllers');

const router = new express.Router()

router.post('/auth/register', controllers.users.registerPost);
router.post('/auth/login', controllers.users.loginPost);

router.get('/getAllUsers', controllers.users.getAllUsers);
router.put('/changeRole', controllers.users.changeUserRole);

router.post('/routine', controllers.routine.sampleRoutinePOST);
router.get('/routine', controllers.routine.sampleRoutineGET);

router.post('/user/addRoutine', controllers.routine.userAddRoutine);
router.post('/user/getRoutine', controllers.routine.userGetRoutine);

router.post('/sampleRoutines', controllers.routine.sampleRoutinePOST);
router.get('/sampleRoutines', controllers.routine.sampleRoutineGET);

router.post('/editRoutine', controllers.routine.editRoutine);
router.delete('/deleteRoutine/:id', controllers.routine.deleteRoutine);

router.get('/workout/exerciseNames', controllers.exercise.exerciseNamesGET);
router.post('/workout/addExercise', controllers.exercise.exercisePOST);
router.post('/workout/getRoutine', controllers.workout.getRoutine);
router.post('/workout/postWorkout', controllers.workout.postWorkout);
router.post('/workout/history', controllers.workout.getHistory);
router.post('/workout/exerciseHistory', controllers.workout.exerciseHistory);
router.post('/workout/getWorkout', controllers.workout.editWorkoutFind);
router.delete('/workout/deleteWorkout/:id', controllers.workout.deleteWorkout);

router.get('/articles', controllers.article.getArticles);
router.post('/articles', controllers.article.postArticle);
router.post('/articles/getArticle', controllers.article.getArticle);
router.put('/articles/editArticle', controllers.article.editArticle);
router.delete('/articles/deleteArticle/:id', controllers.article.deleteArticle);

module.exports = router;