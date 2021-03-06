/**************************************
 TITLE: externalAlert							<----- Update the file name
 AUTHOR: Tyler S. Stinson			<----- *Your* name should be here
 CREATE DATE: 5 July 2013
 PURPOSE: To develop good software engineeering skills		<----- Also update the purpose of the file
 LAST MODIFIED ON: 12 May 2017
 LAST MODIFIED BY: Tyler S. Stinson
 MODIFICATION HISTORY:
 7 May 2015: Add comments (SAS)
 12 May 2015: Modify comments Tyler S. Stinson
***************************************/

// The $ is the jQuery object
// "document" is the document object
// ready is a method of the jQuery object
// function creates an anonymous function to contain the code that should run
// In English, when the DOM has finished loading, execute the code in the function.
// See pages 312-313 of the text for details.
$(document).ready(function(){
			
	// Pop up a window that says "Here's a javascript test file!"
	alert("Here's a javascript test file!");
				
}); // end of $(document).ready()