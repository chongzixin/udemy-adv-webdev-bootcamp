$(document).ready(function() {
    $.getJSON("/api/todos")
    .then(addTodos);
    
    $('#todoInput').keypress(function(event) {
        // check for enter key
        if(event.which == 13) {
            createTodo();
        }
    });
    
    // THIS ONLY WORKS FOR SPAN THAT ARE ALREADY IN THERE (HARDCODED), NOT THOSE WHICH HAVE YET TO BE ADDED
    // $('span').on("click", function() {
    //     console.log("clicked");
    // });
    // INSTEAD LISTEN ON THE LIST, AND SPECIFY A SECOND PARAM "SPAN" WHICH THEN MEANS "SPAN IN LIST"
    $('.list').on("click", "span", function(event) {
        // without stop propagation, this will also trigger the click.li function because span is in the li
        event.stopPropagation();
        removeTodo($(this).parent());
    });

    $('.list').on('click', 'li', function() {
        // $this is already the li object
        updateTodo($(this));
    });
});

function addTodos(todos) {
    // add todos to the page
    todos.forEach(function(todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {
    var newTodo = $('<li>' + todo.name + ' <span>X</span></li>');
    // adds id variable to the todo using .data()
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if (todo.completed) newTodo.addClass("done");
    $('.list').append(newTodo);
}

function createTodo() {
    // send request to create new todo
    $.post('/api/todos', { name: $("#todoInput").val() })
    .then(function(newTodo) {
        addTodo(newTodo);
        // clear the input
        $('#todoInput').val("");
    })
    .catch(function(err) {
        console.log(err);
    })
}

function updateTodo(todo) {
    var updateUrl = '/api/todos/' + todo.data("id");
    // negate the status
    var isDone = !todo.data("completed");
    var updateData = { completed: isDone };
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function() {
        todo.toggleClass("done");
        // update the .data() to track the correct status
        todo.data("completed", isDone);
    });
}

function removeTodo(todo) {
    var clickedId = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/' + clickedId
    })
    .then(function () {
        todo.remove();
    });
}