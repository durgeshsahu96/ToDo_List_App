const mongoose = require('mongoose');

// Defining Schema for Todo List App
const todoSchema = new mongoose.Schema({

    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    date1: {
        type:Date,
        default:Date.now
    },
    date: {
        type: Date,
        require: true
    }
  
});

// Adding document to collection
const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;

