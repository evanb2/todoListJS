$(document).ready(function() {
    $("input#name").focus();
    $("form#create_list").submit(function(event) {
        event.preventDefault();

        var listName = $("input#name").val();

        var newlistObject={ list: listName, tasks: [] };

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
                newlistObject.tasks.forEach(function(task) {
                    $("ul#tasks").append("<li><h5>List: " + newlistObject.list + "</h5> Task: " + task.task + "</li>");
            });
        });

    });
});
