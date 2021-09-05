(function() {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim" , "Ajay", "Jacob", "Joe", "Jake", "Blake", "Jana"];
    
	/* Ajay Kumar new code */
	var nameList=" ";
	for (var i = 0; i < names.length; i++) 
	 {  if(i == (names.length -1)) 
		   {nameList += names[i];}
	  else {nameList += names[i] + ", "}	  
	 } /* for */

	var pNames = document.getElementById("nmeLst") 
	var text = document.createTextNode(nameList);
	pNames.appendChild(text);
		
     var uln = document.getElementById("Other");
	 var nameVal= ""; 
    /* Ajay Kumar new code: Ends here */
   
   /* Module 4 Starter Code */
	for (var nameIdx in names) {	  
	  if (names[nameIdx].charAt(0).toLowerCase() === "j") 
	     {uln = document.getElementById("jName");  
		  nameVal = byeSpeaker.speak(names[nameIdx]);}	   
    else {uln = document.getElementById("Other");
	      nameVal = helloSpeaker.speak(names[nameIdx]);}	
	
	  var li = document.createElement('li');
      li.appendChild(document.createTextNode(nameVal));
       uln.appendChild (li);
	}   
	
})();