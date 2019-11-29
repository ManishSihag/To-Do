const taskDatalayer = require('../datalayer/task.datalayer')

class taskController{
   //Create a new ToDo Task
    static async createTask(req,res){
        let {taskTitle, taskData} = req.body
        if(!taskTitle || !taskData){
            return res.status(400).send('Bad Request');
        }
        let task = {taskData,taskTitle};
        try {
            task = await taskDatalayer.createTask(task);
        } catch (error) {
           console.log(error.message);
           return res.status(500).send('Internal Server Error');        
        }
       return res.status(200).json(task);
     }

// List all ToDo Tasks
    static async getAllTasks(req, res){
        let allTasks;
        try {
            allTasks = await taskDatalayer.getAllTasks();
        } catch (error) {
            console.log(error.message);
            return res.status(500).send('Internal Server Error');
            }
        return res.status(200).json(allTasks);    
    } 

// Get a Task by Id
    static async getTaskById(req, res){
        let taskid = req.params.taskid;
        let task;
        try {
            task = await taskDatalayer.getTaskById(taskid);
        } catch (error) {
            console.log(error.message);
            return res.status(500).send('Internal Server Error');
        }
        return res.status(200).json(task)
    }

//Update a task by Id
    static async updateTaskById(req, res){
        let taskid = req.params.taskid
        const updateTask = {
                 taskTitle : req.body.taskTitle,
                 taskData : req.body.taskData
           }
           if(!updateTask.taskTitle || !updateTask.taskData){
               return res.status(400).send('Bad Request');
           }
           try {
             await taskDatalayer.updateTaskById(taskid , updateTask);
           }
           catch(error) {
             res.status(500).send(`Internal Server Error :${err.message}`);
             return;
             }
           res.status(200).json({"message" : "Task updated successfully"});
         }
         
// Delete a Task By Id
    static async deleteTaskById(req, res){
        let taskid = req.params.taskid;
        try {
            await taskDatalayer.deleteTaskById(taskid);   
        } catch (error) {
            console.log(error.message);
            return res.status(500).send(`Internal Server Error ${error.message}`)
        }
        return res.status(200).json({"message" : "Task Deleted successfully"});
    }     

}
module.exports = taskController;