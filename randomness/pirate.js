
function pirate(strRank, strName, intFavNumber, strHTMLid){
	this.strRank = strRank;
	this.strName = strName;
	this.intFavNumber = intFavNumber;
	this.strHTMLid = strHTMLid;
	/**************************************
	NAME: speak
	PURPOSE: if object is a captain create message explaining game
			if object is not captain the message states what number the 
			pirate picked
	PARAMETERS: no parameters
	RETURN VALUE: strMessage1
	**************************************/
	this.speak = function(){
		var strMessage1 = "";
		if (this.strRank == "captain"){
			strMessage1 = this.strName + " says 'I has a bottle o' grog to award to the crew mate who can guess me secret number between 1 and 10.'";
		}// end if
		else{ 
			this.intFavNumber = this.pickRandomNumber();
			strMessage1 = "Crew member "+ this.strName + " says 'Yar! I pick the number "+ this.intFavNumber +"'";
		}//end else
		return strMessage1;
	};//end speak
	
	/**************************************
	NAME: pickRandomNumber
	PURPOSE: pick a number between 1 and 10
	PARAMETERS: no parameters
	RETURN VALUE: no return value
	**************************************/
	this.pickRandomNumber = function(){
		return  Math.ceil(10 * Math.random());
	};//end pickRandomNumber
}//end pirate class
