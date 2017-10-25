/**************************************
 TITLE: conversions							
 AUTHOR: Tyler S. Stinon (SAS)			
 CREATE DATE: 19 May 2015
 PURPOSE: To develop good understanding of data conversions in javascript		
 LAST MODIFIED ON: 19 May 2015
***************************************/
$(document).ready(function(){
	var strName = "";
	var strQuestion = "What be your name?";
	var strDefaultName = "Patches O'Houlihan";
	strName = prompt(strQuestion, strDefaultName); //prompt for user's name

	var strPlunderQuestion = "Yarh " + strName + " how many doubloons did ye plunder?";
	var strDefaultDoubloon = "0";
	var strNewDoubloon = "";
	var intDoubloon;
	var intDoubloonValue;
	var intDollars = 287;
	var strDoubloonValue = "";
	strNewDoubloon = prompt(strPlunderQuestion, strDefaultDoubloon); //get user input

	intDoubloon = parseInt(strNewDoubloon);
	intDoubloonValue = intDollars * intDoubloon;
	strDoubloonValue = intDoubloonValue.toString();

	alert(strName + " You have plundered " + strNewDoubloon + " doubloon fer a total profit of " + strDoubloonValue + " Argh!") 
});
