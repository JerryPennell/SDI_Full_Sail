/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 4
   API Project 
*/


/** Declare globals*/

//JerryLib is the main class which has functions and prototype methods avail for access as a library 
var JerryLib = function (){

 /*
 *Phone Number validation Function
 *Checks for basic American phone numbers 11, 10, 7 instances
 *pass in a string or num to determine if it fits the phone criteria
 */

 var formatAndValidatePhone = function(phone) {  //creating method for formatting phone and validation
    phone = phone.replace(/[^0-9]/g,'');         //global replace for numbers
    var digits = phone.length;      			 //get the length of the phone number
    if (digits > 11) {    						 //checking for 11 digit phone number
        return false;   						 //if length is greater than 11 digits then false
    } else {                   					 //keep checking
        code = '';             					 //area code string
        if (digits == 11) {       				 //If the digits are 11 in length continue
            code = '1 ';            			 //11 digits are preset with a 1 
            phone = phone.substring(1);   		 //substring the value
        } else if (digits == 10) {               //If the phone number is a 10 digit phone number
           area = phone.substring(0,3);          //Substring the area code from the phone
           prefix = phone.substring(3,6);		 //Substring the prefix of the phone number
           line = phone.substring(6);			 //Substring of the main line number
           return '(' + area + ') ' + prefix + '-' + line;	//return of formatted number
        } else if (digits == 7) {							//checking for 7 digit phone number
          prefix = phone.substring(0,3);					//Substring of prefix at different position since 7 digits
          line = phone.substring(3,7);                      //Main line substring since it is 7 digits
          return prefix + '-' + line;						//Return of the prefix and line formatted
        }
        area = phone.substring(0,3);						//substring area code 
        prefix = phone.substring(3,6);                      //prefix substring 
        line = phone.substring(6);                          //main line substring
        return code + '(' + area + ') ' + prefix + '-' + line; //Full format of US phone
     }
  }; 
  
  /*
   *Email address validation Function
   */
  
  var isValidEmail = function(str) {
	return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
  }	
  
	/*
	 *URL validation Function
	 *
	 *NODE                     EXPLANATION
	----------------------------------------------------------------------
	(?-imsx:                 group, but do not capture (case-sensitive)
	                         (with ^ and $ matching normally) (with . not
	                         matching \n) (matching whitespace and #
	                         normally):
	----------------------------------------------------------------------
	  /                        '/'
	----------------------------------------------------------------------
	  ^                        the beginning of the string
	----------------------------------------------------------------------
	  (                        group and capture to \1:
	----------------------------------------------------------------------
	    ht                       'ht'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    f                        'f'
	----------------------------------------------------------------------
	  )                        end of \1
	----------------------------------------------------------------------
	  tp                       'tp'
	----------------------------------------------------------------------
	  s?                       's' (optional (matching the most amount
	                           possible))
	----------------------------------------------------------------------
	  ://                      '://'
	----------------------------------------------------------------------
	  [a-z0-9-\.]+             any character of: 'a' to 'z', '0' to '9',
	                           '-', '\.' (1 or more times (matching the
	                           most amount possible))
	----------------------------------------------------------------------
	  \.                       '.'
	----------------------------------------------------------------------
	  [a-z]{2,4}               any character of: 'a' to 'z' (between 2
	                           and 4 times (matching the most amount
	                           possible))
	----------------------------------------------------------------------
	  /?                       '/' (optional (matching the most amount
	                           possible))
	----------------------------------------------------------------------
	  (                        group and capture to \2 (optional
	                           (matching the most amount possible)):
	----------------------------------------------------------------------
	    [^\s<>\#%",\{\}\\|       any character except: whitespace (\n,
	    \\\^\[\]`]+              \r, \t, \f, and " "), '<', '>', '\#',
	                             '%', '"', ',', '\{', '\}', '\\', '|',
	                             '\\', '\^', '\[', '\]', '`' (1 or more
	                             times (matching the most amount
	                             possible))
	----------------------------------------------------------------------
	  )?                       end of \2 (NOTE: because you are using a
	                           quantifier on this capture, only the LAST
	                           repetition of the captured pattern will be
	                           stored in \2)
	----------------------------------------------------------------------
	                           '\n'
	----------------------------------------------------------------------
	)                        end of grouping
	---------------------------------------------------------------------
	*
	*/
	
	var is_valid_url = function (url) //Checks valid url
	{
	  return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);   //See explain plain for URL expression above
	}
	
	/**Title Case Function *
	
    *NODE                     EXPLANATION
	----------------------------------------------------------------------
	(?-imsx:                 group, but do not capture (case-sensitive)
	                         (with ^ and $ matching normally) (with . not
	                         matching \n) (matching whitespace and #
	                         normally):
	----------------------------------------------------------------------
	  /                        '/'
	----------------------------------------------------------------------
	  ^                        the beginning of the string
	----------------------------------------------------------------------
	  (                        group and capture to \1:
	----------------------------------------------------------------------
	    a                        'a'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    an                       'an'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    and                      'and'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    as                       'as'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    at                       'at'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    but                      'but'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    by                       'by'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    en                       'en'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    for                      'for'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    if                       'if'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    in                       'in'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    of                       'of'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    on                       'on'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    or                       'or'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    the                      'the'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    to                       'to'
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    v                        'v'
	----------------------------------------------------------------------
	    s?                       's' (optional (matching the most amount
	                             possible))
	----------------------------------------------------------------------
	    \.?                      '.' (optional (matching the most amount
	                             possible))
	----------------------------------------------------------------------
	   |                        OR
	----------------------------------------------------------------------
	    via                      'via'
	----------------------------------------------------------------------
	  )                        end of \1
	----------------------------------------------------------------------
	   i                       '\ni'
	----------------------------------------------------------------------
	)                        end of grouping
	----------------------------------------------------------------------
	 *
	 *
	 *NODE                     EXPLANATION  for /([^\W_]+[^\s-]*)/g
	----------------------------------------------------------------------
	(?-imsx:                 group, but do not capture (case-sensitive)
	                         (with ^ and $ matching normally) (with . not
	                         matching \n) (matching whitespace and #
	                         normally):
	----------------------------------------------------------------------
	  /                        '/'
	----------------------------------------------------------------------
	  (                        group and capture to \1:
	----------------------------------------------------------------------
	    [^\W_]+                  any character except: non-word
	                             characters (all but a-z, A-Z, 0-9, _),
	                             '_' (1 or more times (matching the most
	                             amount possible))
	----------------------------------------------------------------------
	    [^\s-]*                  any character except: whitespace (\n,
	                             \r, \t, \f, and " "), '-' (0 or more
	                             times (matching the most amount
	                             possible))
	----------------------------------------------------------------------
	  )                        end of \1
	----------------------------------------------------------------------
	   *                       ' ' (0 or more times (matching the most
	                           amount possible))
	----------------------------------------------------------------------
	  /g                       '/g'
	----------------------------------------------------------------------
	)                        end of grouping
	----------------------------------------------------------------------
	*/
	
	String.prototype.toTitleCase = function () {                                                    //String prototype to change title case
		  var smallWordRex = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;  //See explain plan above for regExp - 
		  																							//google suggeston exclusion list for common non 
		  																							//title words
	
		  return this.replace(/([^\W_]+[^\s-]*) */g,                                                //Explain plan noted above
		 function (match, phrase, idx, title) {                                                     //function to get match, phrase, index and title case
		    if (idx > 0 && idx + phrase.length !== title.length &&									//checks for index greater than zero and if the phrase 
		    																						//length is not equal to title length
		      phrase.search(smallWordRex) > -1 && title.charAt(idx - 2) !== ":" &&                  //and if the phrase search using the regExp not equal -1
		      																						//looks at the title of the index while not at colon
		      title.charAt(idx - 1).search(/[^\s-]/) < 0) {                                         //searching the starting index while not less than zero 
		      return match.toLowerCase();                                                           //sets the matching 1st char to lower case
		    }
		    if (phrase.substr(1).search(/[A-Z]|\../) > -1) {                                        //Matches against the alphabet for uppercase characters
		      return match;																			//returns the match
		    }
		    return match.charAt(0).toUpperCase() + match.substr(1);                                 //returns the first case as uppercase of title instances
		  });
	 };
	
    /*
	Given a string that is a list of things separated by 
	a given string, as well as another string separator, 
	return a string with the first separator changed to the 
	second: "a,b,c" + "," + "/" → "a/b/c".
	*/
	
	var findAndReplace= function (workingString, currentItem, replace){	     //Find and replace function input of the working string, current item for replacing
	  var currentIndex = 0;                                                       //Starts the current index
	  var returnStr = "";												          //returns string intialization
	  while (currentIndex = workingString.indexOf(currentItem) >= 0) {	  		  //Takes the current index to get the index of the passed item
	    returnStr += workingString.substring(0, currentIndex) + replace;          //once the item replaced is located it is replaced and appended
	    workingString = workingString.substring(currentIndex+currentItem.length); //working string is then checked and passed up to the next index
	  }
	  return returnStr;                                                           //returns the completed string with replacement
	};
	
	/*
	Format a number to use a specific number 
	of decimal places, as for money: 2.1 → 2.10
	*/
	
	var format_number = function (pnumber,decimals){								  //Formats a number for number of decimal places
	    if (isNaN(pnumber)) { return 0};											  //Checks to see if the input is not a number
	    if (pnumber=='') { return 0};                     							  //Checks to see if the input is a string
	    var snum = new String(pnumber);												  //creates a new string number to index
	    var sec = snum.split('.');          										  //splits the number on the decimal
	    var whole = parseFloat(sec[0]);												  //gather the whole value as parsed into float
	    var result = '';														      //intialize the result string
	    if(sec.length > 1){															  //checks the length value to see if it is greater than 1
	        var dec = new String(sec[1]);											  //initializing the new decimal value against the split
	        dec = String(parseFloat(sec[1])/Math.pow(10,(dec.length - decimals)));    //decimal value is divided by a power of ten, getting 
	        																		  //the length for number of decimals
	        dec = String(whole + Math.round(parseFloat(dec))/Math.pow(10,decimals));  //the decimal value then is rounded for the number of places
	        var dot = dec.indexOf('.');  											  //finds the index of the decimal
	        if(dot == -1){															  //if need to move the decimal
	            dec += '.';     													  //decimal is moved	
	            dot = dec.indexOf('.');												  //to correct index location
	        }
	        while(dec.length <= dot + decimals) { dec += '0'; }                       //while the length is being checked the decimal and zeros are referenced
	        result = dec;															  //result of the decimal
	    } else{																		  //If the length is not greater than 1
	        var dot;																  //Intializing the dot holding for decimal
	        var dec = new String(whole);											  //Takes in parseFloat value for decimal
	        dec += '.';																  //decimal addition
	        dot = dec.indexOf('.');													  //Index of the decimal 
	        while(dec.length <= dot + decimals) { dec += '0'; }						  //itteration while the length is less than or equal to the index 
	        																		  //and decimal for addition of zeros
	        result = dec;                                                             //sets the result to be returned
	    }
	    return result;																																					//returns the decimal formatted result
	};
	
	/*
	Fuzzy-match a number: is the number 
	above or below a number within a certain percent?
	*/
	Number.prototype.isFuzzy= function(ncompare, percentage){						  //Prototype function of number for checking fuzzy logic
	    var deviation= ncompare*(percentage/100),          							  //checks the deviation percentage
	           num= +this;															  //Sets the check for value
	    return num>= ncompare-deviation && num<= ncompare+deviation;                  //returns the number within the allotment for percent after calculation 
	};
	
	
    /*
	Find the number of hours or days 
	difference between two dates.
	*/
	var DateDiff = function(t1, t2)  {      										   //Takes input of two dates for difference of two values
	         t1 = new Date(t1).getTime();											   //calls get time function built in for param 1
	         t2 = new Date(t2).getTime();                                              //calls get time function built in for param 2                     
				this.inHours = function() {                                            //In hours function    
			        return parseInt((t2-t1)/(3600*1000));        					   //Returns the time in hours
			    }
			    
			    this.inDays = function() {	 										   //In days function
			        return parseInt((t2-t1)/(24*3600*1000));     					   //Returns the time in Days
			    }	 
	};
		
	//Validate Date	utility method
	var isValidDate = function (d) {                                                   //Checks to see if the date is a valid date
		  if ( Object.prototype.toString.call(d) !== "[object Date]" ) 				   //if object is not of type date it will return false
		    return false;
		  return !isNaN(d.getTime());                                                  //If not a number it will get the time of the date
	};
	
	/*
	Given a string version of a number such as "42", 
	return the value as an actual Number, such as 42.
	*/
		
	var convertInteger = function (stringarg) {                                        //convertes string number into actual number
		this.num = stringarg;                                                          //this number is set to parameter
	}
	convertInteger.prototype.toString = function() {                       			   //sets convertInteger to prototype of string for usage
		return this.num;
	}
	
	
	/*
	Find the smallest value in an array that is 
	greater than a given number
	*/
	Array.prototype.minGreaterThan=function(chkval) {    							  //checks if smallest value is greater than number passed in
		var t=this,																      //t value is set to the value passed in
		       smallval=Number.POSITIVE_INFINITY,                  					  //intializes smallval to positive number range for array prototype
		       i;                                                                     //i is a place holder for the array
	for (i=0;i<t.length;i++) {                                                        //loop through the array
		if (chkval<t[i] && t[i]<smallval) smallval=t[i];              			      //checks if the value is greater than the smallest value
	   }    
	 return smallval;                                                                 //returns the smallest value
	};
	
	/*
	Find the total value of just the numbers in an array, 
	even if some of the items are not numbers.
	*/
	
	Array.prototype.sum = function() {
		var asum = 0;                                                //Calculator var set to 0
		var len = this.length;                                       //Length of array
		for (var i = 0; i < len; i++) {                              //Itterate the array for the length
		var enm = +this[i];                                          //collecting a value out of the array
		if(!enm && this[i] !== 0 && this[i] !== '0') enm--;          //if the value is not zero and not string of zero go through the array
			if (this[i] == enm &&  typeof this[i] != "string" ) {    //Making sure the value is not a string value
				asum += enm;                                         //Sums the values of the array that pass
			}
		}
		return asum;
	};
	
	/*
	Given an array of objects and the name of a key, return 
	the array sorted by the value of that key in each of the objects: 
	"a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
	*/
	
	
	//Function to sort an array consisting of Javascript objects by a field you specify
	
	Array.prototype.sortFields = function( fieldName, reverse ) {   // Pass in the field name and sort order
	   
	  var values = this;											//initialize values to this object
	  var sortA, sortB;                         					//initialize the fields of key and property
	   
	  function lowerCaseSort( a, b ){               				//lowercase sort if the field is lower case
	 
		  sortA = a[fieldName];                         		    //Field 1 initializes the array with its property
		  sortB = b[fieldName];                         		    //Field 2 initializes the array with its property
	     
	    if (sortA=="" && sortB=="") {            				    //If both fields are empty returns zero
	      return 0;                                                 //returns zero
	    } else if (sortA=="") {                                     //If Field 1 is empty returns 1
	      return 1;													//returns 1 if field is incorrect
	    } else if (sortB=="") {                                     //If second field is blank returns -1 
	      return -1;                                          	    //return -1
	    }
	     
	    sortA = sortA.toLowerCase();              				    //sorts 1st field to lower case
	    sortB = sortB.toLowerCase();               				    //sorts 2nd field to lower case
	     
	    if( sortA > sortB ){ return 1 * checktrue; }   			    //Changes the return modifier if the first field is greater than the second
	    if( sortA < sortB ){ return -1 * checktrue; } 			    //Changes the retrun modifier if first value is less than the second field value
	    return 0;                                                   //return zero
	  }
	   
	  function compareToSort(a,b) {                     			//compares the values with in the array to sort
		  sortA = a[fieldName];                              	    //Field 1 initializes the array with its property
		  sortB = b[fieldName];                             	    //Field 2 initializes the array with its property
	     
	    if (sortA==null && fieldB==null) {            				//Checks field 1 and field 2 for null values
	      return 0;                                                 //if true return 0
	    } else if (sortA==null) {                              	    //If only value a is returned as null
	      return 1;                                                 // return 1
	    } else if (sortB==null) {                                   //if only second field is is null
	      return -1;                                                //returns a -1 
	    }
	     
	    return ( sortA.compareTo(sortB) * checktrue);  			    //return compared values using compareTo method 
	  }
	  function genericSort( a, b ){                       			//generic sorts basic field types using  comparison
	     
		  sortA = a[fieldName];                           		    //sorts 1st field
		  sortB = b[fieldName];                          		    //sorts 2nd field
	     
	    if (sortA==null && sortB==null) {        				    //checks to see if the values are null for comparison
	      return 0;                                                 //returns zero if both are null
	    } else if (sortA==null) {                        		    //if 1st field is null
	      return 1;                                                 //if 2nd field is null return 1 
	    } else if (sortB==null) {                       		    //checks for field 2 as null
	      return -1;												//return -1 if field 2 is null
	    }
	     
	    if( sortA > sortB ){ return 1 * checktrue; }   //comparison object field values uses conditional check
	    if( sortA < sortB ){ return -1 * checktrue; } //comparison object field if field 1 is less than field 2
	    return 0;
	  }
	   
	  try {                                                               // try block simular to java to catch errors
	    if( !fieldName || values.length === 0 ){ return values; }         //if no fieldname is present or length is zero return 0
	     
	    var checktrue = ( reverse ? -1 : 1);                              //checks values of -1 or 1 as true reversing the elements of the 
	    																  //array if passed in to do so
	     																  //determine datatype of the fields - based on first value
	     																  //this function can handle string, number and date sorting
	    var first = values[0][fieldName];   							  //string, number or object
	     
	    var sortFunction;                                                 //sort Function intialization 
	    if (typeof first == "string") {                         		  //checks the type of first to see if it is type string
	      sortFunction = lowerCaseSort;                    				  //calls lower case sort
	    } else if (typeof first=="object" && (first.constructor == (new Date).constructor)) {  //if the type is of object and date constructor 
	      sortFunction = compareToSort;                             	  //will set the sortFunction to the compareToSort method
	    } else {                                                          //else the generic sort is used as last check
	      sortFunction = genericSort;
	    }	     
	    values.sort(sortFunction);                                  	  //passes the values to sort against the specified method based on type
	     
	  } catch (e) {                                                       //errors out the error is thrown to the console.log  
	    console.log("error while sorting: " + e.toString())  			  //shows the error while sorting if it fails to sort 
	  }
	   
	  return values;                                                      //returns the values from the sort as object
	};

	  //Public methods accessible to JerryLib class
	     return {
	       "formatAndValidatePhone":formatAndValidatePhone,               //Method to validate phone
	       "isValidEmail":isValidEmail,                                   //Method to validate email
	       "is_valid_url":is_valid_url,                                   //Method to Validate url 
	       "findAndReplace":findAndReplace,                               //Method to Find and replace
	       "format_number":format_number,                                 //Method to format decimal numbers
	       "DateDiff":DateDiff,                                           //Method to check for difference in  2 dates
	       "isValidDate":isValidDate,                                     //Method to check for date is valid to pass into DateDiff
	       "convertInteger":convertInteger                                //Method that takes string integers into actual integers
	     }
	
	}
	