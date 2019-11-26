const taskModel = require('../model/task.model');
const mongoose = require('mongoose');

class TaskDatalayer{

    static createTask(task){
        var today = new Date();
        
        const newtask = new taskModel({
            taskTimeStamp: Math.floor(today/1000),
            taskTitle : task.taskTitle,
            taskData : task.taskData});

        return newtask.save().catch((err)=>{
            throw new Error(`Could not create a Task ${err.message}`);
        })    
    }

    static getAllTasks(){
        return taskModel.find().exec().catch((err)=>{
            throw new Error(`could no get all tasks: ${err.message}`);
        })
    }
}

module.exports = TaskDatalayer;