This's a project as TodoList, it helps people to organize their day, and do more achievements throughout it.

# The Design, it's a different than other similar projects, where it's three section.
* AddTodo Section: where the User can Enter the task's title.
* ToDoList Section: where exist the incomplete tasks.
* Completed Section: where exist the complete tasks.

# The main Technologies, which I used, that is simply a Mean stack:
* MangoDb : Database
* Node.js: Backend
* Angular 8: Frontend

# Some other libraries, which I used too
* mongoose.js
* express.js
* Angular Material

# How can you install the project?
There're two main folders :
- Api : It containts entire backend's code (RestApi)
- Frontend: It containts entire Frontend's code (User Interface) 

# you should open two folders separately
* Api : 
1) npm install (to install all dependencies)
2) nodemon app (to run the Rest Api)

* Frontend :
1) npm install (to install all dependencies)
2) ng serve -o (to run the USer Interface)

The project should to open automatically, if not, just open localhost:4200 port


# If you would like to get a look on Rest Api by (Postman or another tools), use this links
- GET : localhost:3000/list
- POST: localhost:3000/list
- PATCH: localhost:3000/list/:id
- DELETE: localhost:3000/list/:id

# The schema likes the following Json Formatting :
Task {
  _id: string;
  title: string;
  status: boolean;
}




