const express = require('express');
// Object of Express
const app = express();
// Port Number
const port = 8000;
// DATABASE
const db = require('./config/mongoose');
// Import todo From Models
const Todo = require('./models/todo');

// Setting Up Statics and Body Parser
app.use(express.static('./assets'));
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes'));

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Server
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});


