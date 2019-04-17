const express = require('express')
const controllers = require('../controllers');

const router = new express.Router()

router.post('/auth/register', controllers.users.registerPost);
router.post('/auth/login', controllers.users.loginPost);

router.post('/routine', controllers.routine.sampleRoutinePOST);
router.get('/routine', controllers.routine.sampleRoutineGET);

router.post('/user/addRoutine', controllers.routine.userAddRoutine);
router.post('/user/getRoutine', controllers.routine.userGetRoutine);

module.exports = router;