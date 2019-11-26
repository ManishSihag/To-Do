"use strict";
const taskController = require("../controllers/tasks.controller");

const router = require('express').Router();

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks)

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;