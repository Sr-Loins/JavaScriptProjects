/**************************************
 TITLE: multiWrites							
 AUTHOR: Tyler S. Stinon (SAS)			
 CREATE DATE: 19 May 2015
 PURPOSE: To develop good understanding of functions in javascript
		This is a semi interactive story
		Alerts will show events and a new paragraph will display on the 
		webpage showing the outcome.
 LAST MODIFIED ON: 19 May 2015
***************************************/

/*****
Purpose: To display the ending message of the story
Parameters: strID, intBottlesOfRum
Return:
*****/
function rum(strId, intBottlesOfRum){
	alert("Celebration! A crew of soon to be rich men and women! Music fills the air as you sail away into the sunset!");
	var el = document.getElementById("rum");
	var strMessage = "A drunken crew member stumbles over to you. 'Captain Stinson?' He begins to say. 'I don't think I can handle drinking "+intBottlesOfRum+" bottles of rum!' He promptly falls over and begins to snore. You smile and say 'Yo Ho!' "
	el.textContent = strMessage;
}
	
/*****
Purpose:Display the raid segment of the story
Parameters: strId, intAmount
Return:
*****/
function raid(strId, intAmount){
	alert("The sound of swords clanking and screams fill the air as your crew sends the Spainards to Davey Jone's locker. After a while the noise stops. Everything is silent now.");
	var el = document.getElementById("raid");
	var strMessage = "Happy crew members begin bringing" +intAmount+" of the world's finest treasures over to your boat."
	el.textContent = strMessage;
	
}

/*****
Purpose: Display the boarding party segment of the story 
Parameters: strId, intCrewMember
Return:
*****/
function board(strId, intCrewMember){
		alert("You close in on the Spanish vessel. They were no match for your ships speed. You see their frightened expressions as your crew boards the Spanish ship.")
		var el = document.getElementById("board");
		var strMessage = "From the helm you watch with pride as your "+intCrewMember+" crew members board the Spanish ship.";
		el.textContent = strMessage;
}
/*****
Purpose: Display the segment of the story where the crew engages the enemy
Parameters: strId, intTime
Return:
*****/
function engage(strId, intTime){
		alert("You stand proudly at the helm. 'This is it, the big payday, these rich Spaniards wont know what hit em' You shout to the crew. ");
		var el = document.getElementById("engage");
		var strMessage = "You yell to the crew. 'Yargh you scavy dawgs we have "+intTime+" chance to plunder these Spanish devils and take all their booty!'"
		el.textContent = strMessage;
}
/*****
Purpose: Display the segment of the story where the lookout announces what colors teh ship is flying
Parameters: strId, intFlagNum
Return:
*****/
function checkColors(strId, intFlagNum){
	alert("You wait attentivley to hear the lookout announce what colors the ship is flying");
	var el = document.getElementById("colors");
	var strMessage = "Yargh! They be fly'n " +intFlagNum+" o'dem Spanish flags!"; 
	el.textContent = strMessage;
	
}	

/*****
Purpose: Display the segment of the story where the lookout notices a ship
Parameters: strId, intHowMany
Return:
*****/
function lookOut(strId, intHowMany){
	alert("The lookout notices something in the distance");
	var el = document.getElementById(strId);
	var strMessage = "The look out yells from the crows nest 'Yargh! I see " +intHowMany+" boats'.";
	el.textContent = strMessage;	
}

alert("Sailing on the sea. The sea is calm today. The breeze feels nice on your skin. You take a deep breath of the sea scented breeze.");
lookOut("lookout", 1);
checkColors("colors", 1);
engage("engage", 1);
board("board", 12);
raid("raid", 10);
rum("rum", 2);
