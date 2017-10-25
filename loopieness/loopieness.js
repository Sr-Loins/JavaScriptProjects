/**************************************
* TITLE: Arrays and Loopiness
* AUTHOR: Christian Dodds
* CREATE DATE: 9/29/2014
* PURPOSE: learning use of loops and string manipulation
	Takes a single character input from the user and 
	converts it into its ascii binary representation
	displayed as true for 1 and false for 0
*  LAST MODIFIED ON: 3 June 2017
*  LAST Modified By: Tyler S. Stinson
*  Modification History:
*  9/29/2014: Created date
*  3 June 2017: added code to drive the functions in the original document.  
**************************************/

$(document).ready(function(){
			
	alert("Hoist the secret message ye scurvy dawgs!");
	var chrLetter = prompt("Argh! Give me a single character!");
	if (chrLetter.length > 1 || chrLetter.length < 1){//If there is no more than one character procede
		alert("Argh! What ye be doing? I said only enter 1 character! Refresh the bloody page and try again!");	
	}//end if
	else {
		splitIt(chrLetter);
	};//end else
	
	/*****			
	Purpose: turns the user inputed character into an array of binary characters and returns
			outputs the encrypted message on the screen
	Parameters: the single character / letter inputed by user		
	Return: n/a
	*****/
	function splitIt(chrLetter1){
		var intAsciiOf = parseAscii(chrLetter); //varriable ot hold the ascii rebresentation of the character. change the character to ascii
		var strBinOf = parseBin(intAsciiOf); //varriable to hold binary rebresentation of character. change to a binary number that is a string
		var list = strBinOf.split(""); //array to hold binary digits
		var intBitNum = 1; //integer to help output array to html page represent what bit number we are on
		var strIdPt1 = "bit"; //sring to get the bit part of div id
		var strIdPt2 = ""; //sting that will have the number part of the div id
		var strIdPt3 = ""; //string to hold concat of idPt1 and idPt2
		var strOutput = ""; //string to hold output
		var strToF = ""; //string to hold true or false string
		for (var i = 0; i < list.length; i++){
			intBitNum = i + 1; //update the bitNum
			strIdPt2 = intBitNum.toString();
			strIdPt3 = strIdPt1 + strIdPt2;
			strOutput = list[i];
			strToF = output(strOutput);
			document.getElementById(strIdPt3).textContent = strToF;
		}//end while
	}
	/*****			
	Purpose: Evaluates if it should return the string true or false baised 
			off of the value of strOutput
	Parameters: a character of 1 or 0 from the list array and the div 		
	Return: the string value true if strOutput is 1 or the string value of false if 
			strOutput is 0
	*****/
	function output(strOutput){
		if(strOutput == '1'){
			return "true";
		}//end if
		else {
			return "false";
		};//end else
	}//end output 
		
	/*****			
	Purpose: *** assignes the Unicode of the character to intAscii and returns intAscii ***			
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
	/*****			
	Purpose: *** convert the int intAscii string into a base 2 number and make it a string. 
			Make sure the base 2 number is exactly 8 bits. If it is too small take the differnce and 
			concat that many zeros.***			
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2); //converts int to base to number as string
		if(strBin.length < 8) //give the binary representation of the number leading 0s if it is under 8 bits
		{
			var intPlaceHolders = 8 - strBin.length; //difference in size. number of leading 0 bits.
			for(var i = 0; i < intPlaceHolders; i++) //concat leading 0s to make number of bits equal to 8
			{
				strBin = "0" + strBin; 
			}
			
		}
		
		return strBin;
	}//end parseBin
	

});

