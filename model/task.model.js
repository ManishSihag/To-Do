'use strict'

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // },
    taskTimeStamp :{ 
        type : String, 
        required : true
    },

    taskTitle:{
        type : String,
        required: true
    },

    taskData: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('tasks', taskSchema);