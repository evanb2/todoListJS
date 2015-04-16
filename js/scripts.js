$(document).ready(function() {
    $("input#name").focus();
    // $('form#to_do').submit(function(event) {
    //     event.preventDefault()
    //
    //     var taskInput = $("input#task").val();
    //     var taskObject= {task:taskInput};
    //     var CompletedTask={};
    //
    //     $("#tasks").append("<li>" + taskObject.task + "</li>");
    //
    //     $("input#task").val("");
    //
    //
    //     $("li").last().click(function(){
    //         $(this).remove();
    //         $("#completed").append("<li>" + taskObject.task + "</li>");
    //     });
    // });

    $("form#create_list").submit(function(event) {
        event.preventDefault();

        var listName = $("input#name").val();

        var newlistObject={ list: listName, tasks: [] };

        $("#newTasks").each(function() {
            var taskName = $(this).find("input#task").val();
            var newTask = { task: taskName };
            newlistObject.tasks.push(newTask);
        });
        console.log(newlistObject.tasks);

        $("#lists ul").append("<li>" + newlistObject.list + newlistObject.tasks + "</li>");

        $("input#name").val("");
    });
});
