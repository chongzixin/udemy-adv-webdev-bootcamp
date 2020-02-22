var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api", { useNewUrlParser: true, useUnifiedTopology: true});

// tell mongoose we will use Promises
mongoose.Promise = Promise;

// directly exports it out to whoever require /models
module.exports.Todo = require("./todo");