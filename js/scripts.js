$(document).ready(function() {
    $("input#name").focus();

    var currentList = null;

    var displayTasks = function() {
        $("ul#tasks").empty();
        currentList.tasks.forEach(function(task) {
            $("ul#tasks").append("<li>" + "Task: " + task.task + "</li>");
        });
    }

    $("form#create_list").submit(function(event) {
        event.preventDefault();

        var listName = $("input#name").val();

        var newlistObject = { list: listName, tasks: [] };

        $("#newTasks").each(function() {
            var taskName = $(this).find("input#task").val();
            var newTask = { task: taskName };
            newlistObject.tasks.push(newTask);
        });

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

    });
});
