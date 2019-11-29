"use strict";
const taskController = require("../controllers/tasks.controller");

const router = require('express').Router();

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:taskid', taskController.getTaskById);
router.put('/tasks/:taskid', taskController.updateTaskById);
router.delete('/tasks/:taskid', taskController.deleteTaskById);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'To-Do API' });
  });


module.exports = router;