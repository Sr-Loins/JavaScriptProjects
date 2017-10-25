/**************************************
* TITLE: More Ifs
* AUTHOR: Tyler S. Stinson
* CREATE DATE: 2 June 2017
* PURPOSE:  Uses else if and case statements to figure out directions
			user is asked to their current longitude and latitude 
			then user is asked to enter their location's longitude
			and latitude. Using if statements and case statements
			the program tells the user what direction they need to head
*  LAST MODIFIED ON: 2 June 2017
*  LAST Modified By: Tyler S. Stinson
*  Modification History:
*  2 June 2017: Created date  
**************************************/

$(document).ready(function(){
alert("Hi");			
var intCurLat = prompt("please enter your current latitude");
var intCurLon = prompt("please enter your current longitude");
var intDestLat = prompt("please enter location latitude");
var intDestLon = prompt("please enter location longitude");
travelIf(intCurLat, intCurLon, intDestLat, intDestLon);
travelCase(intCurLat, intCurLon, intDestLat, intDestLon);

/**************************************
NAME: travelIf
PURPOSE: determin what direction to output 
PARAMETERS: User's current longitude and latitude and destination longitue and latitude
RETURN VALUE: no return value
**************************************/
function travelIf(intCurLat, intCurLon, intDestLat, intDestLon){
	if (intCurLat <= intDestLat && intCurLon <= intDestLon){
		document.getElementById('dirIf').textContent = "Head North East!";
	}//end if
	else if ( intCurLat <= intDestLat && intCurLon >= intDestLon){
		document.getElementById('dirIf').textContent = "Head North West!";
	}//endif
	else if (intCurLat >= intDestLat && intCurLon >= intDestLon){
		document.getElementById('dirIf').textContent = "Head South West";		
	}//end else if 
	else if (intCurLat >= intDestLon && intCurLon <= intDestLon){ 
		document.getElementById('dirIf').textContent = "Head South East";
	}//end else if
	else {
		document.getElementById('dirIf').textContent = "Land Ho";
	}//end else
};//end travel
/**************************************
NAME: travelCase
PURPOSE: determin what direction to output 
PARAMETERS: User's current longitude and latitude and destination longitue and latitude
RETURN VALUE: no return value
**************************************/
function travelCase (intcurLat, intCurLon, intDestLat, intDestLon){
	switch (true){
		case (intCurLat <= intDestLat && intCurLon <= intDestLon) :
			document.getElementById('dirCase').textContent = "Head North East";
			break;
		case (intCurLat <= intDestLat && intCurLon >= intDestLon) :
			document.getElementById('dirCase').textContent = "Head North West";
			break;
		case (intCurLat >= intDestLat && intCurLon >= intDestLon) :
			document.getElementById('dirCase').textContent = "Head South West";
			break;
		case (intCurLat >= intDestLon && intCurLon <= intDestLon) :
			document.getElementById('dirCase').textContent = "Head South East";
			break;
		default :
			document.getElementById('dirCase').textContent = "Land Ho";
	}//end switch
	
}//end travelCase
});

