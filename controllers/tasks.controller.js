const taskDatalayer = require('../datalayer/task.datalayer')

class taskController{

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

}
module.exports = taskController;