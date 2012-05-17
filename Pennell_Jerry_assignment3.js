/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 3
   Theme Project - Bacon and how to prepare it (refactoring)
*/


/**
 * Declare globals
 *
 */

var str    = 'bacon',                                   //Create a static string for later use
    numToReachEpicBacon = 48,                           //Number to reach epic bacon    
    typeOfBacon = '',								    //Type of bacon String
    listOfBacon = ["Pork", "Turkey", "Faken"],          //Array List of bacon out there
    
    //JSON Objects
    myJSONBaconDescObject = {"bacons": [                                                                                  //Bacon description JSON Object
                                        {"cut": "Thick", "texture": "Tender", "smell": "smokey"},
                                        {"cut": "Medium", "texture": "Chewy", "smell": "sweet"},
                                        {"cut": "Thin", "texture": "Crunchy", "smell": "char grilled"}
                                    ]
                                },
    myJSONBaconTypeObject = {"types": [																						//Bacon types  JSON Object
                                       {"baconName": "Pork", "rating": "100", "taste": "excellent flavor great for all!"},
                                       {"baconName": "Turkey", "rating": "50", "taste": "It\'s ok if you don\'t like pork."},
                                       {"baconName": "Faken", "rating": "25", "taste": "tastes like saw dust"},                                                                     
		                               {"baconName": "Wild Boar", "rating": "100", "taste": "has excellent wild flavor excellent for all!"},
		                               {"baconName": "Ostrich", "rating": "50", "taste": "tastes better than Turkey but not like pork."},
		                               {"baconName": "wheat bacon", "rating": "25", "taste": "tastes like dirt"}
                                       ]
                               };
                               
                               

/**
 * Boolean Function
 * Pass in args of string and string
 * Conditional If  -  Else
 */

var isBestBacon = function (str, typeOfBacon) {                              //Accepts two arguments
        if (str == 'bacon' && typeOfBacon == 'apple wood') {
	        console.log("Mmmm I love " + typeOfBacon);                       //Output that apple wood is the best
	        return true;	   
        } else {
	        console.log("*Choking* What is this? This is not good " + str);  //No one likes Faken output
	        return false;
	    } 
	}


/**
 * Number Function
 * Pass in args number
 *  while loop
 */    
    
var poundOfBacon = function (numPiecesOfBaconForNirvana) {   //Accepts a number of pieces of bacon
	var piecesToMakePound = 24,                              //Static set amount to make a pound of bacon
	    cutOfBacon =myJSONBaconDescObject.bacons[0].cut,     //The type of cut of bacon from JSON Object
	    myNumberOfSlices =0,                                 //private variable for number of slices
	    howManySlices = piecesToMakePound;                   //How many slices left to get to bacon nirvana

	    while(myNumberOfSlices < piecesToMakePound) {        //While true output we still need more bacon!
	        console.log("");
			console.log("I have "+myNumberOfSlices+" slices of "+ str +" that\'s not enough for a pound!");
			console.log("It takes "+numPiecesOfBaconForNirvana+" to reach Bacon Nirvana..");	
			
	        myNumberOfSlices++;                                                    //Increment number of slices of bacon
	        console.log("We need "+ howManySlices-- +" left to get to a pound!");
	    }
	    console.log("");
	    console.log("We have "+ cutOfBacon +" sliced cuts of BACON NIRVANA!");
	    return myNumberOfSlices;
     }
	

/**
 * String Function
 * Pass in args String, String
 *  concatnation
 */   

var	concatAllThat = function (strIn, strAlso) {                //Function that accepts two strings for sentence
		var outputBacon;                                       //concating of string variables
		    outputBacon='What is worth waiting for? ';
		    outputBacon+='It\'s ';
		    outputBacon+=strIn+' ';
		    outputBacon+=strAlso;
	    console.log(outputBacon);
	    return outputBacon;    								   //The big output cheer for BACON!
	}
	
	
/**
 * Array Function
 * Pass in args number,  array
 *  For loop
 */   

var baconArray = function (numPickYourBacon, arrTypesOfBacon) {
        var arrayTaste =myJSONBaconTypeObject.types,                                  //Array with descriptions
            quote = ["","","","","",""];                                              //Initialize the array
        console.log("");    
        console.log("For clarification let\'s explain the types of bacon and what I think about them.");    
        for (var i = 0; i < arrayTaste.length; i++){
            quote[i] += arrayTaste[i].baconName+" "+arrayTaste[i].taste;                       //Itterate the bacon list with tastes (JSON)
            console.log(quote[i]);
        }
        console.log("");
        console.log("which bacon did you choose? Let\'s see..");
        console.log(arrTypesOfBacon[numPickYourBacon] + " " + arrayTaste[numPickYourBacon].taste);       //Output now uses JSON Object call
        return quote;
  
    }



/**
 * Creates a Bacon CLASS
 * Properties options of name , flavor
 * Math Method for calculating Flavor
 */
var Bacon = function( bacon_options ){	   
	   
	   var variants = {                                                // Private options used for construction
	     name: null,												   // Default value for name set to null
	     flavor: 0													   // Flavor value is set to zero
	   };
	   
//check to see if the options are undefined
	   
	   if ( bacon_options != null &&  bacon_options != undefined       // If the options are not undefined
	        &&  bacon_options != 'undefined' ){
	     for ( var opt in variants ) {                                 // For loop to check for options n the variants object looking for null values
	       if ( bacon_options[ opt ] != null  						   // Checking to make sure not null
	            &&  bacon_options[ opt ] != undefined                  // Checking to make sure not undefined  
	            &&  bacon_options[ opt ] != 'undefined' ){             // Checking for undefined string value
	    	   variants[ opt ] =  bacon_options[ opt ];                //Then we access the objects contents
	       }
	     }
	   }
	   
  
  var bacon_name = variants.name;                      // Private name bacon variants

  var bacon_flavor = variants.flavor;                  // Private flavor variants

  var calcFlavorRating = function(){                   // Private flavor calculation method        
    return bacon_flavor / 5;  
  };

  // Begin Public Section
  return {
    
    getName: function(){                   // Name as acceesor 
      return bacon_name;                   // Returns bacon name
    },
    
    setName: function(name){               // Name as mutator 
      bacon_name = name;                   // Set the baon name
    },
 
    getFlavor: function(){                 // Flavor accessor 
      return bacon_flavor;                 // Returns  the bacon flavor
    },

    setFlavor: function(flavor){           // Flavor mutator
      bacon_flavor = flavor;               // Sets the bacon flavor
    },

    getFlavorRating: function(){           // Calculate bacon flavor
      return calcFlavorRating();           // Returns the bacon calculation flavor
    }
    
  };
};

/**
 * Creates a Cooker CLASS
 * Properties options of pan , temp
 *  Method for howToCookBacon, isCrispy
 */

function Cooker(pan, temp) { 
	   this.pan = pan; 
	   this.temp = temp;
	   this.bacontemp=350;                              //Number Property
	   this.pansizes =['small','medium','large'];       //Array Property
	   
	   this.howToCookBacon = function(){ 
	     return 'If your going to cook this bacon use a ' + this.pan + ' pan at ' + this.temp + ' degrees.';       //Returns recommended bacon use set by user                       
	   }	
	     
	   this.isCrispy = function() { 															//Method to check if pan will allow the bacon to get crispy	     	
		   var checkCrispy = false;
		 
		     if (this.temp >= 350 && pan ==this.pansizes[0] ) {
		           checkCrispy=  true;		      
		     }		     
		     return checkCrispy;                            //Checks to see if the bacon can be crispy for output
	     }
	     
	   this.CrispyValue = function() {                      //Return values for the story for Crispy or not crispy
	      if(this.isCrispy()){
	         return "Yes, it\'s Crispy";
	      }else{
	         return "No this is not Crispy";
	      }
	   }	  	    
	}



/**
 * Function to list the types of bacon
 * Nested For loop
 *  Calls list
 */
function displayJSONBaconTypeList(){
	for (var key in myJSONBaconTypeObject) {                  //Loop through the JSONObject
		   var obj = myJSONBaconTypeObject[key];              //setting the properties of the Object
		   for (var prop in obj) {                            //Output of the objects property of BaconName
		      console.log(prop + " = " + obj[prop].baconName);
		   }
		}
}

  

/**
 * Story Time with conditions    -  METHOD PROCEDURE  This goes in the main call below
 * Pass in trigger arg   : boughtBacon
 *  if conditional 
 */   

var arriveAtBaconNirvana = function (boughtBacon) {                 //Main Call


    console.log("What types of bacon can I buy.. Let me see...");                 //Review which types of bacon to buy
	displayJSONBaconTypeList();                                                      //List of bacons to buy	

//Will I arrive a bacon Nirvana?!?! Set bought bacon to true to see Bacon Nirvana

    if (boughtBacon) {																																								 //Check to see if the bacon was bought
       console.log("I arrived at the store bought my "+str+" and headed home.");
       console.log("In my best Julia Childs Voice.. not the croaking one, I must review my options of "+str+".");
       console.log("Just to be fair I will detail my thoughts on other "+str+" products");
       
//Calling Boolean Function	                                																													
	isBestBacon('bacon','apple wood');    							        //Pass in 'bacon' and 'apple wood' to make this statement true
	console.log("");	
	console.log("Let us count the bacon to see if we have reached bacon nirvana ...");
	
//Calling Number Function	
	poundOfBacon(24);                                                       //Accepts a number to see if you have enough to reach bacon Nirvana
	
//Calling String Function
    
	concatAllThat('bacon','good');                    						//Accepts two strings as parameters for 'What is worth waiting for'?
	
//Calling the Bacon Array
         
	baconArray(1, listOfBacon);     										//Types of bacon as an array Pick 0,1,2 for the elements ["Pork", "Turkey", "Faken"]
	
	console.log("One last word of wisdom .. in order to reach Epic "+str+" you will need "+numToReachEpicBacon+" pieces!");
	
	
	
	var cookit = new Cooker("small", 350);									//Use a small pan and heat to 350 to get crispy bacon
	
	console.log(""); 
	console.log(cookit.howToCookBacon());                                   //Information on how to cook your bacon
    console.log('Let us see if we got our ' + str +' crispy.. '+cookit.CrispyValue());
    console.log('Now to we review bacon and the flavor ratings.. here is how I rate them:');
    console.log("");

    var thick = new Bacon({ name: "Apple wood", flavor: 80 });									//creation of thick cut apple bacon 

    var medium = new Bacon({ name: "Hickory smoked",flavor: 75  });                             // version with Hickory Smoked medium cut

    var thin = new Bacon({ name: "Pepper cured",flavor: 35  });                                 // Pepper cured thin cut

    console.log("Cut:"+myJSONBaconDescObject.bacons[0].cut);
    console.log("Name: " + thick.getName() + "\nFlavor setting: " + thick.getFlavor());          //Orignally was going to test the age of the bacon 
    console.log("");
    console.log("Cut:"+myJSONBaconDescObject.bacons[1].cut);
    console.log("Name: " + medium.getName() + "\nFlavor setting: " + medium.getFlavor());       //Output of the medium cut
    console.log("");
    console.log("Cut:"+myJSONBaconDescObject.bacons[2].cut);
    console.log("Name: " + thin.getName() + "\nFlavor setting: " + thin.getFlavor());           //Output of the thin cut
    console.log("");
    console.log("I have decided to create my own bacon . . . Muahahaha, I shall call it");                  
    thin.setName( "Texas Bacon" );  // Testing mutators
    thin.setFlavor( 100 );          // Testing mutators

    console.log("Name: " + thin.getName() + "\nFlavor: " + thin.getFlavor());
    console.log("Now to test the evil bacon acceptance calculator for my creation..");
    console.log(thin.getName() + " has a estimated calculation for acceptance of: " + thin.getFlavorRating()+'%');  // Testing public calls to private methods


    }else{
       console.log("No worries I have extra "+ str +" in the fridge! So no need to go to the store.");
       console.log("I ate too much "+ str +" earlier.. I think I will sleep and fix it later");
       console.log("*Yawn* Bacon Nirvana will not be reached for now.");
    }
}


/**
 * logger function
 * Utility Function to disable the console so the return values come out first
 */

var logger = function() {													//Declare the logger function

    var oldConsoleLog = null;												//sets the old log to null turning it off
    var prop = {};                                                        	//Create property to publish console

    prop.enableConsole =  function enableConsole() {                        //Adds the method to enable the console
                        
                            if(oldConsoleLog == null)						//If the console is off
                                return;
                            window['console']['log'] = oldConsoleLog;		//Sets the setting to turn on the console availability 
                        };

    prop.disableConsole = function disableConsole() {                       //Adds the method to disable the console
                        
                            oldConsoleLog = console.log;				    //Sets the console to off
                            window['console']['log'] = function() {};		//updates the function for logger
                        };
    return prop;															//Returns the console
}();  //Self calling function


/**
 * tryMyConsole
 * Self invoking fucntion to output Each Variable to console via function
 * Let the story begin!!
 */

(function tryMyConsole() { 
        if (typeof console != "undefined") { 
        



logger.disableConsole();                                                       //Disable the console so no console return values shown
var returnTypeOfBoolean = isBestBacon('bacon','apple wood'),                   //return of boolean function
    returnTypeOfNumber = poundOfBacon(24),                                     //return of number function
    returnTypeOfString = concatAllThat('bacon','good'),                        //return of string function
    returnTypeOfArray = baconArray(1,listOfBacon),                             //return of array function
    returnTypeOfObject = Bacon().getName(), 								   //sample public method getter called
    boughtBacon = true; 													   //argument for the procedure
 
          
logger.enableConsole();                                                         //Enable the console
          console.log("output of all the return types . . . ");
          console.log("");
          console.log("Function of type boolean return: "+ returnTypeOfBoolean.valueOf());
	      console.log("Function of type number: "+ returnTypeOfNumber.valueOf());            
		  console.log("Function of type string: "+ returnTypeOfString.valueOf());           
		  console.log("Function of Array: "+ returnTypeOfArray);  
		  console.log("Function of Object: "+returnTypeOfObject);                
		  console.log("");
		  console.log("");
		  
		                                  
		  arriveAtBaconNirvana(boughtBacon);     //Procedure that calls the functions to see if we Arrive at Bacon Nirvana	            
           
        } 
})();	

