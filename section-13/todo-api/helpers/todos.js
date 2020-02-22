var db = require("../models");

exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function (todos) {
        res.json(todos);
    })
    .catch(function (err) {
        res.send(err);
    });
};

exports.createTodo = function(req, res) {
    db.Todo.create(req.body)
    .then(function (newTodo) {
        res.status(201).json(newTodo);
    })
    .catch(function (err) {
        res.send(err);
    });
}

exports.showTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function (todo) {
        res.status(201).json(todo);
    })
    .catch(function (err) {
        res.send(err);
    });
}

exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(function (todo) {
        res.status(201).json(todo);
    })
    .catch(function (err) {
        res.send(err);
    });
}

exports.deleteTodo = (req, res) => {
    db.Todo.findByIdAndDelete(req.params.todoId)
    .then(function (msg) {
        res.status(201).json({ message: "successfully deleted" });
    })
    .catch(function (err) {
        res.send(err);
    });
}

module.exports = exports;