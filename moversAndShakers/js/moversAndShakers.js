/*
    Filename: triggered.js
    Written by: Tyler S. Stinson
    Purpose: Using jquery to create an interactive page. Here user can 
			control a ship's movments useign the buttons on the screen.
    Date: 16-6-2017
    Modification History: N/A
    Last Modified: N/A
*/
$(document).ready(function(){
	alert("hello, use the buttons to control your ship!");
	//varriables for movement controls
	var NUDGE_RIGHT   = "+=20px";
	var MV_UP = "-=10px";
	var MV_DOWN = "+=10px";
	var MV_RIGHT = "+=10px";
	var MV_LEFT = "-=10px";
		
	//events for button clicks
	$("#uncloak").click(ImgShow);
	$( "#cloak"   ).click( ImgHide );
	$("#up").click(up);
	$("#down").click(down);
	$("#right").click(right);
	$("#left").click(left);
	$("#toggle").click(toggleCloak);
	$("#hideShip").click(hideShip);
	$("#showShip").click(showShip);
	$("#shipFadeO").click(shipFadeO);
	$("#shipFadeI").click(shipFadeI);
	
	/*****
	Function: shipFadeI
	Purpose: animation, ship fade in 
	Parameters:
	Return:
	*****/
	function shipFadeI (){
		$("#box").fadeIn();
	}//end shipFadeI
	
	/*****
	Function: shipFadeO
	Purpose: animation, ship fade out 
	Parameters:
	Return:
	*****/	
	function shipFadeO (){
		$("#box").fadeOut();
	};//end shipFadeO
	
	/*****
	Function: showShip
	Purpose: animation, when ship is hiddin
			this will show the ship by sliding the 
			image down
	Parameters:
	Return:
	*****/	
	function showShip(){
		$("#box").slideDown();
	}//end showship
	
	/*****
	Function: hideShip
	Purpose: animation, when ship is visible
			this will hide the ship and slide up
			the image
	Parameters:
	Return:
	*****/	
	function hideShip(){
		$("#box").slideUp();
	}//end hide map
	
	/*****
	Function: toggleCload
	Purpose: animation, Makes the ship invisible or visible
			depending on its current visibility
	Parameters:
	Return:
	*****/	
	function toggleCloak() {
		$("#box").toggle("swing");
	}// end toggleCloak
	
	
	/*****
	Function: left
	Purpose: animation, move the ship left according 
			to the number of pixels specified in the 
			varriable
	Parameters: MV_LEFT
	Return:
	*****/	
	function left(){
		$("#box").animate({"left": MV_LEFT}, 100);
	};//end left
	
	
	/*****
	Function: down
	Purpose: animation, move the ship down according 
			to the number of pixels specified in the 
			varriable
	Parameters: MV_DOWN		
	Return:
	*****/	
	function down(){
		$("#box").animate({top: MV_DOWN});
	}//end down 
	
	/*****
	Function: up
	Purpose: animation, move the ship up according 
			to the number of pixels specified in the 
			varriable
	Parameters: MV_UP		
	Return:
	*****/	
	function up(){
      $("#box").animate({top: MV_UP }, 100);
    }//end up
	
	/*****
	Function: right
	Purpose: animation, move the ship right according 
			to the number of pixels specified in the 
			varriable
	Parameters: MV_RIGHT	
	Return:
	*****/	
	function right(){
		$("#box").animate({"left": MV_RIGHT}, 100);
	}//end right
	
	
	/*****
	Function: ImgHide
	Purpose: animation, hide the ship 
	Parameters: confirmCloakText()		
	Return:
	*****/	
	function ImgHide() {
    $( "#box" ).hide(confirmCloakText);
	}//end ImgHide
	
	/*****
	Function: confirmCloakText
	Purpose: animation, message to let the user know
			the ship has been cloaked
	Parameters:		
	Return:
	*****/		
	function confirmCloakText() {
	alert("Cloak activated, Captian!");
	}//end confirmCloakText
	
	/*****
	Function: confirmUncloakText
	Purpose: animation, message to let the user know
			the ship has been uncloaked
	Parameters:		
	Return:
	*****/
	function confirmUncloakText(){
		alert("Cloak deactivated, Captian!");
	}//end confirmUncloakText
	
	/*****
	Function: imgShow
	Purpose: animation, show the ship
	Parameters:		
	Return:
	*****/
	function ImgShow() {
    $( "#box" ).show(5000, confirmUncloakText);
	}//end ImgShow
	
});
