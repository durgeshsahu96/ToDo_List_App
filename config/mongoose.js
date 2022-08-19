 // Require the library
 const mongoose = require('mongoose');

 // Connect to the Database
 mongoose.connect('mongodb://localhost/todo-list-app');

 // Acquire the connection (to check if it is successful)
 const db = mongoose.connection;

 // Error
 db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

 // If Server Up and Running
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports=db;