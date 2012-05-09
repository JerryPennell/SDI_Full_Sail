/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 2
   Theme Project - Bacon
*/


//Declare Variables

var str    = 'bacon',                                   //Create a static string for later use
    numPiecesOfBaconForNirvana = 24,                    //Number of pieces of bacon as number to reach nirvana
    arrSliceTypes = ["thin", "medium", "thick"],        //Types of cuts of bacon
    strWithEsc = 'I\'m waiting on "Natures Candy".',    //String with escapes
    boughtBacon = true,                                 //Boolean to start
    typeOfBacon = 'apple wood',                         //Type of bacon String
    numPickYourBacon = 0;                               //Pick the element of bacon you like
 
 
 
//Boolean Function

	function isBestBacon(str,typeOfBacon) {                             //Accepts two arguments
	   if(str == 'bacon' && typeOfBacon == 'apple wood'){
	      console.log("Mmmm I love "+typeOfBacon);                      //Output that apple wood is the best
	      return true;	   
      }else{
	      console.log("*Choking* What is this? This is not good"+str);  //No one likes Faken output
	      return false;
	  } 
	}
    
//Number Function
    
	function poundOfBacon(numPiecesOfBaconForNirvana) {                  //Accepts a number of pieces of bacon
	var piecesToMakePound = 24,
	    cutOfBacon = 'medium',
	    myNumberOfSlices =0,
	    howManySlices = piecesToMakePound;               //How many slices left to get to bacon nirvana

	    while(myNumberOfSlices < piecesToMakePound){     //While true output we still need more bacon!
	    
			console.log("I have "+myNumberOfSlices+" slices of "+str+" that\'s not enough for a pound!");
			console.log("It takes "+numPiecesOfBaconForNirvana+" to reach Bacon Nirvana..");	
			
	        myNumberOfSlices++;                          //Increment number of slices of bacon
	        console.log("We need "+howManySlices--+" left to get to a pound!");
	    }
	    console.log("We have BACON NIRVANA!");
	    return myNumberOfSlices;
     }
	
	      
//String Function

	function concatAllThat(strIn,strAlso){
		var outputBacon;
		    outputBacon='What is worth waiting for? ';
		    outputBacon+='It\'s ';
		    outputBacon+=strIn+' ';
		    outputBacon+=strAlso;
	    console.log(outputBacon);
	    return outputBacon;      //The big output cheer for BACON!
	}
	
	
//Array Function
	function baconArray(numPickYourBacon, arrTypesOfBacon) {
        var arrayTaste =["bacon is the best!","bacon is just ok.","bacon is like saw dust."],
            quote = "";
        console.log("");    
        console.log("For clarification let\'s explain the types of bacon and what I think about them.");    
        for (var i = 0; i < arrayTaste.length; i++){
            quote[i] += arrayTaste[i] + " ";
            console.log(arrTypesOfBacon[i]+" "+quote[i]);
        }
        console.log(arrTypesOfBacon[numPickYourBacon]+" "+arrayTaste[numPickYourBacon]);
        return quote;
  
    }
  
//Story Time with conditions

function arriveAtBaconNirvana(boughtBacon){


//Will I arrive a bacon Nirvana?!?!
    if(boughtBacon){
       console.log("I arrived at the store bought my "+str+" and headed home.");
       console.log("In my best Julia Childs Voice.. not the croaking one, I must review my options of "+str+".");
       console.log("Just to be fair I will detail my thoughts on other "+str+" products");
    }else{
       console.log("No worries I have extra "+str+" in the fridge! So no need to go to the store.");
    }
//Calling Boolean Function	
	isBestBacon('bacon','apple wood');
	
	console.log("Let us count the bacon to see if we have reached bacon nirvana ...");
	
//Calling Number Function	
	poundOfBacon(24);
	
//Calling String Function
	concatAllThat('bacon','good');
	
//Calling the Bacon Array
    var  arrTypesOfBacon = ["Pork", "Turkey", "Faken"];      //Types of bacon as an array
	baconArray(1, arrTypesOfBacon);
	
	
	
}

//Self invoking fucntion to output Each Variable to console via function

(function tryMyConsole() { 
        if (typeof console != "undefined") { 
        
            /*
console.log("Function of type boolean return: "+ isBestBacon('bacon','apple wood')); //return of boolean function
			console.log("Function of type number "+ poundOfBacon(24));                           //return of number function
			console.log("Function of type string: "+ concatAllThat());                           //return of string function
			console.log("Function of Array: "+ baconArray());                                    //return of array function
*/
			            
            arriveAtBaconNirvana(boughtBacon);
        } 
})();	

