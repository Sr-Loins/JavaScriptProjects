/**************************************
 TITLE: multiWrites							
 AUTHOR: Tyler S. Stinon (SAS)			
 CREATE DATE: 19 May 2015
 PURPOSE: To develop good software engineeering skills		
 LAST MODIFIED ON: 19 May 2015
***************************************/


document.write('My name be Captain Tyler Stinson. Avast ye scurvey dawgs!');

$(document).ready(function(){
	var strMessage = "";
	var elOutput = document.getElementById("myFavElementId");
	strMessage = elOutput.textContenet;
	var strMessage2 = "I enjoy a good sea chantry with me first mate.";
	var elOutput2 = document.getElementById('MyOhterFavElementId');
	elOutput2.innerHTML = strMessage1			
				
}); // end of $(document).ready()


