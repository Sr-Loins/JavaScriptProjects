/**************************************
TITLE: Iffy.js
AUTHOR: Tyler S. Stinson
CREATE DATE: 30-May-2017
PURPOSE: practice with if and branching statments with user input
LAST MODIFIED ON: 30-May-2017
LAST MODIFIED BY: Tyler S. Stinson
MODIFICATION HISTORY:
**************************************/

/**************************************
NAME: getUserInput
PURPOSE: prompt the user with a question "Did ye arrive at port on time?" then take the user's input and display approprite message
PARAMETERS: no parameters
RETURN VALUE: no return value
**************************************/
function getUserInput() {
    var strInput = prompt("Did ye arrive at port on time?");  //hold user's response
    var strAnswer = strInput.toUpperCase();           //convert the user's response to uppercase
	var strMessage = "";                              //message that will be displayed
    
    if (strAnswer != null) {    //make sure they entered something
        if (strAnswer == "YES") {
            strMessage = "Argh! You have earned extra doubloons!";
        }//end if
		else if (strAnswer == "NO") {
			strMessage = "Argh, walk the plank!";	
		}//end elseif
		else { //something went wrong.
			strMessage = "Argh! What kind o' answer be that? Try reloading this here page and answer me with a 'yes' or 'no' Argh!";
		}//end else


    }//end if
	else{ //they didn't say anything
		strMessage = "Argh! What kind o' answer be that? Try reloading this here page and answer me with a 'yes' or 'no' Argh!";
	}//end else
		
	document.getElementById('answer').textContent = strMessage;
};//end getUserInput

getUserInput();