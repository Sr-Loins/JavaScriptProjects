/**************************************
TITLE: driver.js
AUTHOR: Tyler S. Stinson
CREATE DATE: 26-May-2017
PURPOSE: example code with objects
		the captain instance of the pirate class has 
		a set number. The crewMember instances of pirate
		object have to guess what the number is the captain chose
LAST MODIFIED ON: 26-May-2017
LAST MODIFIED BY: Tyler S. Stinson
MODIFICATION HISTORY:
**************************************/

$(document).ready(function(){
	//create captain instance of pirate class
	var captain = new pirate("captain", "Captain Stinson", 4, "captain");
	var elNameCaptain = document.getElementById(captain.strHTMLid);
	elNameCaptain.textContent = captain.speak();

	//create an array to store crewMember instances of pirate class
	var arrPirates = new Array();
	arrPirates.push(new pirate("crewMember", "Crew Member 1", 3, "crewMember1"));
	arrPirates.push(new pirate("crewMember", "Crew Member 2", 6, "crewMember2"));
	arrPirates.push(new pirate("crewMember", "Crew Member 3", 9, "crewMember3"));

	//show crew member's guesses on screen 	
	var elName2 = document.getElementById(arrPirates[0].strHTMLid);
	elName2.textContent = arrPirates[0].speak();

	var elName3 = document.getElementById(arrPirates[1].strHTMLid);
	elName3.textContent = arrPirates[1].speak();

	var elName4 = document.getElementById(arrPirates[2].strHTMLid);
	elName4.textContent = arrPirates[2].speak();

	var message = "The captain says '"; //varriable to contain results message;
	var len = message.length; //varriable to hold the original message length
	var id = 0; 
		
	for (var i = 0; i < 3; i++){
		if(captain.intFavNumber == arrPirates[i].intFavNumber){
			id = i + 1
			message = message + "  Argh! "+arrPirates[i].strName +" be correct! ";
		}//end if
	}//end for	


	if (message.length <= len){
		message = "Argh! ye scervy dawgs be sillier than a dog chasing a cat fish! My number was "+captain.intFavNumber+" !'";
	}//end if
	else 
		message = message + "My number was "+captain.intFavNumber+" !'";

	document.getElementById('result').textContent = message; 
});	