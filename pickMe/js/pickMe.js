/*
    Filename: pickMe.js
    Written by: Tyler S. Stinson
    Purpose: The captain is selecting new pirates for his crew
			buttons will show what people are what type of pirates
    Date: 14-6-2017
    Modification History: None
    Last Modified: N/A
*/
$(document).ready(function(){
	
	
	$("#friend").css({
		fontWeight: "bold",
		color: "brown",
		border: "2px solid yellow"
	});
	//Apply multiple instructions to the id="baby"
	$("#baby").css("color", "pink").append(" is pink.");
	//Apply multiple instructions to the id="mom"
	$("#mom").css("color", "red")
		.append(" changes color")
		.fadeOut("slow")
		.css("border", "2px solid orange")
		.append(", has a border")
		.fadeIn("slow")
		.append(", and fades.");
		
	
	
	//Place a dotted green border around the first member of the Flintstone class
	$(".Flintstone:first").css("border", "1px dotted green");
	//Place a gray border around the element with the id="Fred" if it currently has focus
	$("#Fred:focus").css("border", "2px solid gray");
	//Button Event Registration
	$("#button1").click(whoIsGreat); //button click will append "is great" for all great pirates
	$("#button2").click(whoIsWarior); //changes text color to red for all pirates in the warior class
	$("#button3").click(whoIsCook); //changes text for the cook
	$("#button4").click(whoIsNavigator); //changes the text and the font color to blue
	$("#button5").click(whoArePirates); //Place a thick green border around the <ul> element if it is a parent
	$("#button6").click(whoIsAdvisor); //the text of the advisor fades in and out and changes color
	$("#button7").click(whoIsRobber); //a dotted pink line surrounds the robbers
	
	/********************************
	Name: whoIsGreat
	Purpose:
		appends text to the li elemen
		ts on button click
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/	
	function whoIsGreat (){
		$("li").append(" is great!");
	} //end whoIsGreat
	
	/********************************
	Name: whoIsWarior
	Purpose:
		changes text red for the warior 
		class pirates on button click
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/
	function whoIsWarior () {
		$(".warior").css("color","red");
	}//end whoIsWarior
	
	/********************************
	Name: whoIsCook
	Purpose:
		changes text for the cook on 
		button click
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/
	function whoIsCook (){
		$("#patches").html("Patches Mattok be a great cook!");
	}//end whoIsCook

	/********************************
	Name: whoIsNavigator
	Purpose:
		changes the text and the font 
		color to blue on button click
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/
	function whoIsNavigator(){
		$("#redbeard").html("Redbeard be the best navigator this side of the flat earth!").css("color", "red");
	}//end whoIsNavigator

	/********************************
	Name: whoArePirates
	Purpose:
		Place a thick green border 
		around the <ul> element if it 
		is a pirate on button click
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/	
	function whoArePirates(){
		$("ul:parent").css("border", "4px solid green");
	}//end whoArePirates
	
	/********************************
	Name: whoIsAdvisor
	Purpose:
		the text of the advisor fades 
		in and out and changes color
		on button click
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/	
	function whoIsAdvisor(){
		$(".advisor").fadeOut("slow").css("color", "blue").fadeIn("slow");
	}//end whoIsAdvisor
	
	/********************************
	Name: whoIsRobber
	Purpose:
		a dotted pink line surrounds 
		the robbers on button click
	Parameters:
		N/A
	Return Value:
		N/A
	**********************************/
	function whoIsRobber(){
		$("#william,#turd,#jerry").css("border", "2px dotted pink");
	}//end whoIsRobber
});
