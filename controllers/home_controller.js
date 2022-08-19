// DATABASE
const db = require("../config/mongoose");
const Todo = require("../models/todo");

// Display all Task in Home Page
module.exports.home = function(req, res){
    if(req.body == {} || req.body.category == "all"){  
        Todo.find({}, function (err, todos){
          if(err){
            console.log(`Error in fetching contacts ${err}`);
            return;
          }         
          return res.render("home", {
            title: "TODO App",
            todo_list: todos,
            category:"all",
          });
        });
      }else{
        Todo.find(req.body, function (err, todos){
          if (err) {
            console.log(`Error in fetching contacts ${err}`);
            return;
          }
          return res.render("home", {
            title: "TODO App",
            todo_list: todos,
            category: req.body.category,
          });
        }); 
    } 
};

// Create Task
module.exports.create = function(req,res){
    Todo.create(req.body);
    res.redirect("back");
};

// Delete Task
module.exports.delete = function(req,res){
    let ids = req.body.task;
    if(typeof(ids)=="undefined"){
      return res.redirect('back');
    }
    if(typeof(ids) == "string"){
        Todo.findByIdAndDelete(ids, function(err){
            if(err){ 
                console.log(`Error in deleting`); 
                return; 
            }
        });
    }else{    
        for(let i = 0; i < ids.length; i++){
            Todo.findByIdAndDelete(ids[i], function (err){
                if(err){ 
                    console.log(`Error in deleting`);
                    return; 
                }
            });
        }
    }
    return res.redirect('back');
};

