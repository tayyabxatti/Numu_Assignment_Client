# Getting Started with React-Client side

To start client side project you will have to run following commands:

1. npm install (to install node modules)
2. npm start (to start the web app)

You application will run on localhost:3000


#Application Flow.

There are 2 components in this react app. 

1. UserTable
2. UserHobbies

#UserTable
  UserTable component is used to show all user and add a user. 
  On app.js where UserTable is called we have created a state which gets and sets seleted userId which is used further in UserHobbies to get specific user's hobbies upon user click.
  
#UserHobbies
  Userhobbies component is used to add a hobby and delete a selected hobby.
  From app.js UserHobbies gets selected UserId and adds a hobby against that specific UserId. 
  
