/*
    Filename: allo1.js
    Written by: Tyler S. Stinson
    Purpose: Learning jQuery. Appending to text on 
    HTML and replacing text by button press
    Date: 2017
    Modification History: None
    Last Modified: N/A
*/
$(document).ready(function(){
	//some javascript/jQuery  code will go here
	alert("this alert shows the link to my js file is active");
	$("p").html("Ahoy, matey! Let's write less and do more! Argh.");
	$("#append").click(function(){
		$("p").append(" How cool is this?");
	});//end click function 
	$("#html").click(function(){
		$("p").html("Hey! look! I replaced it!");
	});//end click function
});
