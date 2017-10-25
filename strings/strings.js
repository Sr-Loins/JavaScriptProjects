/**************************************
* TITLE: Strings
* AUTHOR: Tyler S. Stinson
* CREATE DATE: 9 June 2017
* PURPOSE:  Creates names of boats for her magasty based off of user input
			By taking in user input and modifying the string the user typed
*  LAST MODIFIED ON: 9 June 2017
*  LAST Modified By: Tyler S. Stinson
*  Modification History:
*  9 June 2017: Created date  
**************************************/

$(document).ready(function(){
	var listBoatNames =[];
	var strOrigName = prompt("Who does Her Majasty want to name the boats after?", "Megan");
	var strBoatOne = strOrigName.substring(1);
	strBoatOne = 'la ' + strBoatOne;
	listBoatNames.push(strBoatOne);
	var intPos = strBoatOne.indexOf("a");
	var strPos = "";
	strPos = 'boat number ' + intPos;
	listBoatNames.push(strPos);
	var strCharAt = strBoatOne.charAt(1);
	strCharAt = strCharAt + ' boat yo';
	listBoatNames.push(strCharAt);
	var strTrim = strBoatOne.trim();
	strTrim = "The trimed " +strTrim+ " and sassy";
	listBoatNames.push(strTrim);
	var strReplace = strBoatOne.replace("an", "an na na na na ");
	listBoatNames.push(strReplace);
	var strUpper = "the upper" + strBoatOne;
	strUpper = strUpper.toUpperCase();
	listBoatNames.push(strUpper);
	var strLowwer = "the lower "+strBoatOne;
	strLowwer = strLowwer.toLowerCase();
	listBoatNames.push(strLowwer);
	var strSubStr = strBoatOne.substring(0,3);
	strSubStr = "The " + strSubStr;
	listBoatNames.push(strSubStr);
	var strCharAt2 = strBoatOne.charAt('n');
	strCharAt2 = "le " + strCharAt2;
	listBoatNames.push(strCharAt2);
	var strReplace2 = strBoatOne.replace("egan", " The Big One");
	listBoatNames.push(strReplace2)
	var strUpper2 = strReplace2.replace("Big", "Bigger");
	strUpper2 = strUpper2.toUpperCase();
	listBoatNames.push(strUpper2);
	var strReplace3 = strReplace2.replace("Big", "small");
	listBoatNames.push(strReplace3);
	var strLower2 = strReplace3.replace("small", "smaller");
	strLower2 = strLower2.toLowerCase();
	listBoatNames.push(strLower2);
	
	document.getElementById('boat1').textContent = listBoatNames;
	
	
	
	
	
	
});

