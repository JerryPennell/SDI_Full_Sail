/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 4
   API Project 
*/


/**
 * Declare globals
 *
 */

var JerryLib = function (){

}

/*
 *Phone Number validation Function
 *Checks for basic American phone numbers 11, 10, 7 instances
 *pass in a string / num to determine if it fits the phone criteria
*/

function formatAndValidatePhone(phone) {
    phone = phone.replace(/[^0-9]/g,'');
    var digits = phone.length;
    if (digits > 11) {
        return false;
    } else {
        code = '';
        if (digits == 11) {
            code = '1 ';
            phone = phone.substring(1);
        } else if (digits == 10) {
           area = phone.substring(0,3);
           prefix = phone.substring(3,6);
           line = phone.substring(6);
           return '(' + area + ') ' + prefix + '-' + line;
        } else if (digits == 7) {
          prefix = phone.substring(0,3);
          line = phone.substring(3,7);
          return prefix + '-' + line;
        }
        area = phone.substring(0,3);
        prefix = phone.substring(3,6);
        line = phone.substring(6);
        return code + '(' + area + ') ' + prefix + '-' + line;
     }
}

var phonenum ="123x444c4444";
 console.log("Validating phone... "+formatAndValidatePhone(phonenum));

 
 
/*
 *Email address validation Function
*/
 
function isValidEmail(str) {
	   return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
	}
	
var emailadd = "leroy.jenkins@hotmail.com";
console.log("Is "+emailadd+" an email address? : "+isValidEmail(emailadd));

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
function is_valid_url(url)
{
     return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}

var urlset = "http://www.google.com";
if(is_valid_url(urlset)) {
	console.log(urlset+ " is a valid url");
}else {
	console.log(urlset+" is not a valid url");
}


/*
 *Title Case Function
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

String.prototype.toTitleCase = function () {
	  var smallWordRex = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;

	  return this.replace(/([^\W_]+[^\s-]*) */g, 
	 function (match, phrase, index, title) {
	    if (index > 0 && index + phrase.length !== title.length &&
	      phrase.search(smallWordRex) > -1 && title.charAt(index - 2) !== ":" &&
	      title.charAt(index - 1).search(/[^\s-]/) < 0) {
	      return match.toLowerCase();
	    }

	    if (phrase.substr(1).search(/[A-Z]|\../) > -1) {
	      return match;
	    }

	    return match.charAt(0).toUpperCase() + match.substr(1);
	  });
	};
	
	var ThisStr = "little bo peep has a sheep";
	console.log("This is title case for this string -> "+ThisStr.toTitleCase());

/*
Given a string that is a list of things separated by 
a given string, as well as another string separator, 
return a string with the first separator changed to the 
second: "a,b,c" + "," + "/" → "a/b/c".
*/

	function findAndReplace(workingString, currentItem, replace)
	{
	  var currentIndex = 0;
	  var returnStr = "";
	  while (currentIndex = workingString.indexOf(currentItem) >= 0)
	  {
	    returnStr += workingString.substring(0, currentIndex) + replace;
	    workingString = workingString.substring(currentIndex+currentItem.length);
	  }
	  return returnStr;
	}


console.log("replaceChars "+findAndReplace("a,b,c",",","/"));

/*
Format a number to use a specific number 
of decimal places, as for money: 2.1 → 2.10
*/


function format_number(pnumber,decimals){
    if (isNaN(pnumber)) { return 0};
    if (pnumber=='') { return 0};
    var snum = new String(pnumber);
    var sec = snum.split('.');
    var whole = parseFloat(sec[0]);
    var result = '';
    if(sec.length > 1){
        var dec = new String(sec[1]);
        dec = String(parseFloat(sec[1])/Math.pow(10,(dec.length - decimals)));
        dec = String(whole + Math.round(parseFloat(dec))/Math.pow(10,decimals));
        var dot = dec.indexOf('.');
        if(dot == -1){
            dec += '.';
            dot = dec.indexOf('.');
        }
        while(dec.length <= dot + decimals) { dec += '0'; }
        result = dec;
    } else{
        var dot;
        var dec = new String(whole);
        dec += '.';
        dot = dec.indexOf('.');
        while(dec.length <= dot + decimals) { dec += '0'; }
        result = dec;
    }
    return result;
}

var numtoformat = 2.445;
var decplaces = 2;

console.log("Formatting the number "+numtoformat+" to "+decplaces+" decimal places= "+format_number(numtoformat,2));

/*
Fuzzy-match a number: is the number 
above or below a number within a certain percent?
*/
Number.prototype.isFuzzy= function(ncompare, percentage){
    var deviation= ncompare*(percentage/100), 
           num= +this;
    return num>= ncompare-deviation && num<= ncompare+deviation;
}


var nm= 9,
       percent=10;

console.log("Fuzzy match of  above or below a number ("+nm+") in this case, within a certain percent.. of "+percent+" percent is: "+nm.isFuzzy(nm,percent)); 


/*
Find the number of hours or days 
difference between two dates.
*/
var DateDiff = function(t1, t2)  {
         t1 = new Date(t1).getTime();
         t2 = new Date(t2).getTime();   //calls get time function built in for param 2                 
           
			this.inHours = function() {                                                
		        return parseInt((t2-t1)/(3600*1000));        //Returns the time in hours
		    }
		    
		    this.inDays = function() {	 
		        return parseInt((t2-t1)/(24*3600*1000));     //Returns the time in Days
		    }	 
	}
	
//Validate Date	
function isValidDate(d) {
	  if ( Object.prototype.toString.call(d) !== "[object Date]" )
	    return false;
	  return !isNaN(d.getTime());
	}


	var dString = "April, 28, 2012";
    var dStringtoo = "April, 31, 2012"
	 
/*
	var d1 = new Date(dString);
	var d2 = new Date(dStringtoo);
*/
	var diffofdate = new DateDiff("April, 28, 2012", "April, 31, 2012");

	console.log("The difference of the date is = "+	 diffofdate.inHours());

	
	
	

/*
Given a string version of a number such as "42", 
return the value as an actual Number, such as 42.
*/
	
function convertInteger(stringarg) {
	this.num = stringarg;
}
convertInteger.prototype.toString = function() {
	return this.num;
}


var testfunc = new convertInteger("42");
console.log("Parse integer from string "+parseInt(testfunc));






/*
Find the smallest value in an array that is 
greater than a given number
*/
Array.prototype.minGreaterThan=function(a) {
	var t=this,
	       r=Number.POSITIVE_INFINITY,
	       i;
for (i=0;i<t.length;i++) { 
	if (a<t[i] && t[i]<r) r=t[i];
   }    
 return r;
}


var arr=[1,6,12,14],n=5;

console.log("The smallest number in the array that is greater than "+n+" is "+arr.minGreaterThan(n));


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
	}

var ary = [100,"100",100,"3"];
var average = ary.sum();

console.log("The total value of just the numbers in the array is : "+average);



/*
Given an array of objects and the name of a key, return 
the array sorted by the value of that key in each of the objects: 
"a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/

var myObjectArray = [{ a : 2},{ a : 3},{ a : 1}];

//Function to sort an array consisting of Javascript objects by a field you specify

Array.prototype.sortByField = function( fieldName, reverse ) {
   
  var values = this;
  var fieldA, fieldB;
   
  function lowerCaseSort( a, b ){
 
    fieldA = a[fieldName];
    fieldB = b[fieldName];
     
    if (fieldA=="" && fieldB=="") {
      return 0;
    } else if (fieldA=="") {
      return 1;
    } else if (fieldB=="") {
      return -1;
    }
     
    fieldA = fieldA.toLowerCase();
    fieldB = fieldB.toLowerCase();
     
    if( fieldA > fieldB ){ return 1 * multiplier; }
    if( fieldA < fieldB ){ return -1 * multiplier; }
    return 0;
  }
   
  function compareToSort(a,b) {
    fieldA = a[fieldName];
    fieldB = b[fieldName];
     
    if (fieldA==null && fieldB==null) {
      return 0;
    } else if (fieldA==null) {
      return 1;
    } else if (fieldB==null) {
      return -1;
    }
     
    return ( fieldA.compareTo(fieldB) * multiplier);
  }
  function genericSort( a, b ){
     
    fieldA = a[fieldName];
    fieldB = b[fieldName];
     
    if (fieldA==null && fieldB==null) {
      return 0;
    } else if (fieldA==null) {
      return 1;
    } else if (fieldB==null) {
      return -1;
    }
     
    if( fieldA > fieldB ){ return 1 * multiplier; }
    if( fieldA < fieldB ){ return -1 * multiplier; }
    return 0;
  }
   
  try {
    if( !fieldName || values.length === 0 ){ return values; }
     
    var multiplier = ( reverse ? -1 : 1);
     
    //determine datatype of the fields - based on first value
    //this function can handle string, number and date sorting
    var first = values[0][fieldName];   //string, number or object
     
    var sortFunction;
    if (typeof first == "string") {
      sortFunction = lowerCaseSort;
    } else if (typeof first=="object" && (first.constructor == (new Date).constructor)) {
      sortFunction = compareToSort;
    } else {    //numbers
      sortFunction = genericSort;
    }
     
    values.sort(sortFunction);
     
  } catch (e) {
    print("error while sorting: " + e.toString())
  }
   
  return values;
}

//sort by a, ascending
var x = myObjectArray.sortByField("a");	

for (var i = 0; i < x.length; i++){
    console.log("Sorting values of object a["+i+"]="+x[i].a);
}

	

	
