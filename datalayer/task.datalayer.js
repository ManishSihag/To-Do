const taskModel = require('../model/task.model');
const mongoose = require('mongoose');

class TaskDatalayer{
//Create a new ToDo Task
    static createTask(task){
        var today = new Date();
        
        const newtask = new taskModel({
            taskTimeStamp: Math.floor(today/1000),
            title : task.title,
            data : task.data});

        return newtask.save().catch((err)=>{
            throw new Error(`Could not create a Task ${err.message}`);
        })    
    }

// List all ToDo Tasks
    static getAllTasks(){
        return taskModel.find().exec().catch((err)=>{
            throw new Error(`Could not get all tasks: ${err.message}`);
        })
    }
    
// Get a Task by Id
    static getTaskById(taskid){
        return taskModel.findById(taskid).exec().catch((err)=>{
            throw new Error(`Could not get the task: ${err.message}`);
        })
    }

//Update a task by Id
    static updateTaskById(taskid, task){
        var today = new Date();
        let updatedTask = {
          taskTimeStamp : Math.floor(today/1000),
          title : task.title,
          data : task.data
        };
        return taskModel
        .findByIdAndUpdate(taskid, updatedTask , {new : true, useFindAndModify: false}).exec()
        .catch((err) => {
            throw new Error(`Could not update the task: ${err.message}`);
        });
    }

// Delete a Task By Id
    static deleteTaskById(taskid){
        return taskModel.findByIdAndDelete(taskid).exec().catch((err)=>{
            throw new Error(`Could not delete the task: ${err.message}`)
        })
    }
}

module.exports = TaskDatalayer;