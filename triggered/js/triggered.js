/*
    Filename: triggered.js
    Written by: Tyler S. Stinson
    Purpose: Defend the ship agains the angry townsfolk using the mouse pointer, keyboard, and window resize to fight or flee.
    Date: 16-6-2017
    Modification History: None
    Last Modified: N/A
*/
$(document).ready(function(){

	/********************************
	Name: mouseleave
	Purpose:
		when mouse pointer leaes text area
		hides text area showing town1 buildings  
		explosion text area is behind. 
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/
	$("#town1").mouseleave(function(){
		alert("KABLAM!!");
		$("#town1").css('visibility', 'hidden');
		$("#town1explosion").css('visbility', 'show');
	});//end mouseleave
	
  
  
	/********************************
	Name: keypress
	Purpose:
		when a key is pressed
		hides text area showing town2 buildings  
		explosion text area is behind.
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/
	$(document).keypress(function(){
		alert("KABOOM!!");
		$("#town2").css('visibility', 'hidden');
	});
	
	
	/********************************
	Name: resize
	Purpose:
		when window is resized
		hides all text areas   
		prompts user with a message 
		saying they were able to flee safetly
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/
	$(window).resize(function(){
		alert("Argh we got away safetly!");
		$("#town1").css('visibility', 'hidden');
		$("#town2").css('visibility', 'hidden');
		$("#town1explosion").css('visibility', 'hidden');
		$("#town2explosion").css('visibility', 'hidden');
		
	})

});
