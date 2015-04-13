$(document).ready(function() {
    $('form#to_do').submit(function(event) {
        event.preventDefault()

        var taskInput = $("input#task").val();
        var taskObject= {task:taskInput};
        //var CompletedTask={};

        $("#tasks").append("<span class='task'>" + taskObject.task + "<form id='completed'><input type='radio' name='task' value='completed'>Completed</form>"+ "</span></br>");



    });
});
