$(document).ready(function(){



$(".toDo").on('click', 'div',  function(){
		$(this).toggleClass("green");
	});

$(".bttn").click(function(){
		var newListItem = $("<li><div class='toggle'></div>  <input class='customItem'</input> </li>");
		$(".toDo").append(newListItem);
	});



});