$(document).ready(function() {
    $("input#name").focus();
//Global Variable
    var currentList = null;
//Global function to display tasks
    var displayTasks = function() {
        $("ul#tasks").empty();
        currentList.tasks.forEach(function(task) {
            $("ul#tasks").append("<li>" + task.task + "</li>");
        });
    }
//On submit of list with a task
    $("form#create_list").submit(function(event) {
        event.preventDefault();
//Var listname is assisned the input of the list name
        var newlistObject = { list: $("input#name").val(), tasks: [] };
        var newTask = { task: $("input#task").val() };
        newlistObject.tasks.push(newTask);


        $("#lists ul").append("<li class='show-task'>" + newlistObject.list + "</li>");
        $("input#name").val("");
        $("input#task").val("");

        $(".show-task").last().click(function(event) {
            $("ul#tasks").text("");
            currentList = newlistObject;
            displayTasks();
        });
    });

    $("form#add_task").submit(function(event) {
        event.preventDefault();

        var newTaskName = $("input#new_task").val();
        var newTask = {task: newTaskName};
        currentList.tasks.push(newTask);
        displayTasks();
        $("input#new_task").val("");
    });
});
