$(document).ready(function() {
    $('form#to_do').submit(function(event) {
        event.preventDefault()

        var taskInput = $("input#task").val();
        var taskObject= {task:taskInput};
        var CompletedTask={};

        $("#tasks").append("<span class='task'>" + taskObject.task + "</span></br>");


        $(".task").last().click(function(){
            $(this).remove();
            $(".complete").append(taskObject.task + "</br>");
            // $(".hate").click(function(){
            //     $(this).remove();
            //      $("#tasks").append("<span class='task'>" + taskObject.task + "</span></br>");
            //
            //             //  $(".task").last().click(function(){
            //             //      $(this).remove();
            //             //      $("#completed").append("<div class='hate'>" + taskObject.task + "</div></br>");
            //             //      $(".hate").click(function(){
            //             //          $(this).remove();
            //             //           $("#tasks").append("<span class='task'>" + taskObject.task + "</span></br>");
            //             //      });
            //             //  });
            // });
        });


    });






});
