# To-Do API

### Steps to start the application:
    1. Open terminal in the root directory of the project.
    2. Run npm install.
    3. Run npm start.
##### Api server can be accessed at http://localhost:3000 

### Routes
    1.Create a To-Do task: 
                               POST - http://localhost:3000/tasks
                                    Body - {"taskTitle" : "first", "taskData": "this is first"} //json

    2.List all To-Do tasks: 
                               GET - http://localhost:3000/tasks
                                
    
    3.Get a To-Do task by Id:
                               GET - http://localhost:3000/tasks/:taskid
                                   example - http://localhost:3000/tasks/5de0a431134b2b4224a8ff00

    4.Update a To-Do task by Id:
                               PUT - http://localhost:3000/tasks/:taskid
                                   Body - {"taskTitle" : "updatedfirst", "taskData": "this is updatedfirst"}

    
    5.Delete a To-Do task by Id:
                                DELETE - http://localhost:3000/tasks/:taskid
                                         example - http://localhost:3000/tasks/5de0a431134b2b4224a8ff00
