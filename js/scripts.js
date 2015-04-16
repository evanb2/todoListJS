$(document).ready(function() {
    $("input#task").focus();
    $('form#to_do').submit(function(event) {
        event.preventDefault()

        var taskInput = $("input#task").val();
        var taskObject= {task:taskInput};
        var CompletedTask={};

        $("#tasks").append("<li>" + taskObject.task + "</li>");

        $("input#task").val("");


        $("li").last().click(function(){
            $(this).remove();
            $("#completed").append("<li>" + taskObject.task + "</li>");
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
