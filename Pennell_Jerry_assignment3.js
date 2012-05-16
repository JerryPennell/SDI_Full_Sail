/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 3
   Theme Project - Bacon and how to prepare it (refactoring)
*/


//Declare Variables

var str    = 'bacon',                                   //Create a static string for later use
    numToReachEpicBacon = 48,                           //Number to reach epic bacon    
    typeOfBacon = '',									//Type of bacon String
    listOfBacon = ["Pork", "Turkey", "Faken"];          //Array List of bacon out there

 
 
//Boolean Function

var isBestBacon = function (str, typeOfBacon) {                             //Accepts two arguments
        if (str == 'bacon' && typeOfBacon == 'apple wood') {
	        console.log("Mmmm I love " + typeOfBacon);                      //Output that apple wood is the best
	        return true;	   
        } else {
	        console.log("*Choking* What is this? This is not good " + str);  //No one likes Faken output
	        return false;
	    } 
	}


    
//Number Function with while loop
    
var poundOfBacon = function (numPiecesOfBaconForNirvana) {   //Accepts a number of pieces of bacon
	var piecesToMakePound = 24,                             //Static set amount to make a pound of bacon
	    cutOfBacon = 'medium',                              //The typc of cut of bacon
	    myNumberOfSlices =0,                                //private variable for number of slices
	    howManySlices = piecesToMakePound;                  //How many slices left to get to bacon nirvana

	    while(myNumberOfSlices < piecesToMakePound) {        //While true output we still need more bacon!
	        console.log("");
			console.log("I have "+myNumberOfSlices+" slices of "+ str +" that\'s not enough for a pound!");
			console.log("It takes "+numPiecesOfBaconForNirvana+" to reach Bacon Nirvana..");	
			
	        myNumberOfSlices++;                          //Increment number of slices of bacon
	        console.log("We need "+ howManySlices-- +" left to get to a pound!");
	    }
	    console.log("");
	    console.log("We have "+ cutOfBacon +" sliced cuts of BACON NIRVANA!");
	    return myNumberOfSlices;
     }


	
	      
//String Function

var	concatAllThat = function (strIn, strAlso) {               //Function that accepts two strings for sentence
		var outputBacon;                                      //concating
		    outputBacon='What is worth waiting for? ';
		    outputBacon+='It\'s ';
		    outputBacon+=strIn+' ';
		    outputBacon+=strAlso;
	    console.log(outputBacon);
	    return outputBacon;      //The big output cheer for BACON!
	}
	
	
	
	
//Array Function
var baconArray = function (numPickYourBacon, arrTypesOfBacon) {
        var arrayTaste =["bacon is the best!","bacon is just ok.","bacon is like saw dust."],  //Array with descriptions
            quote = ["","",""];                                            //Initialize the array
        console.log("");    
        console.log("For clarification let\'s explain the types of bacon and what I think about them.");    
        for (var i = 0; i < arrayTaste.length; i++){
            quote[i] += arrTypesOfBacon[i]+" "+arrayTaste[i];              //Itterate the bacon list with tastes
            console.log(quote[i]);
        }
        console.log("");
        console.log("which bacon did you choose? Let\'s see..");
        console.log(arrTypesOfBacon[numPickYourBacon] + " " + arrayTaste[numPickYourBacon]);
        return quote;
  
    }
  
  
  
  
  
//Story Time with conditions    -  METHOD PROCEDURE



var arriveAtBaconNirvana = function (boughtBacon) {                 //Main Call


//Will I arrive a bacon Nirvana?!?! Set bought bacon to true to see Bacon Nirvana

    if (boughtBacon) {
       console.log("I arrived at the store bought my "+str+" and headed home.");
       console.log("In my best Julia Childs Voice.. not the croaking one, I must review my options of "+str+".");
       console.log("Just to be fair I will detail my thoughts on other "+str+" products");
       
//Calling Boolean Function	                          //Pass in bacon to make the statement true
	isBestBacon('bacon','apple wood');                //Pass in 'apple wood' to make this statement true
	console.log("");	
	console.log("Let us count the bacon to see if we have reached bacon nirvana ...");
	
//Calling Number Function	
	poundOfBacon(24);                                 //Accepts a number to see if you have enough to reach bacon Nirvana
	
//Calling String Function
    
	concatAllThat('bacon','good');                    //Accepts two strings as parameters for 'What is worth waiting for'?
	
//Calling the Bacon Array
         
	baconArray(1, listOfBacon);     //Types of bacon as an array Pick 0,1,2 for the elements ["Pork", "Turkey", "Faken"]
	
	console.log("One last word of wisdom .. in order to reach Epic "+str+" you will need "+numToReachEpicBacon+" pieces!");
	

    }else{
       console.log("No worries I have extra "+ str +" in the fridge! So no need to go to the store.");
       console.log("I ate too much "+ str +" earlier.. I think I will sleep and fix it later");
       console.log("*Yawn* Bacon Nirvana will not be reached for now.");
    }
}



//Utility Function to disable the console so the return values come out first

var logger = function() {

    var oldConsoleLog = null;
    var prop = {};                                                         //Create prop property to publish console

    prop.enableConsole =  function enableConsole() {                        //Adds the method to enable the console
                        
                            if(oldConsoleLog == null)
                                return;
                            window['console']['log'] = oldConsoleLog;
                        };

    prop.disableConsole = function disableConsole() {                       //Adds the method to disable the console
                        
                            oldConsoleLog = console.log;
                            window['console']['log'] = function() {};
                        };
    return prop;
}();  //Self calling function





//Self invoking fucntion to output Each Variable to console via function
//Let the story begin!!


(function tryMyConsole() { 
        if (typeof console != "undefined") { 
        

logger.disableConsole();                                                          //Disable the console so no console return values shown
var returnTypeOfBoolean = isBestBacon('bacon','apple wood'),                      //return of boolean function
    returnTypeOfNumber = poundOfBacon(24),                                        //return of number function
    returnTypeOfString = concatAllThat('bacon','good'),                           //return of string function
    returnTypeOfArray = baconArray(1,listOfBacon),                                //return of array function
    boughtBacon = true; 														  //argument for the procedure
 
          
logger.enableConsole();                                                           //Enable the console
          console.log("output of all the return types . . . ");
          console.log("");
          console.log("Function of type boolean return: "+ returnTypeOfBoolean.valueOf());
	      console.log("Function of type number: "+ returnTypeOfNumber.valueOf());            
		  console.log("Function of type string: "+ returnTypeOfString.valueOf());           
		  console.log("Function of Array: "+ returnTypeOfArray);                  
		  console.log("");
		  console.log("");
		  
		                                  
		  arriveAtBaconNirvana(boughtBacon);     //Procedure that calls the functions to see if we Arrive at Bacon Nirvana	            
           
        } 
})();	

