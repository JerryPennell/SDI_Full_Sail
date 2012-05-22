/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 4
   API Project 
*/


/**
 * Declare globals
 *
 */



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
 *
 *
*/
function isValidEmail(str) {

	   return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);

	}
	
var emailadd = "leroy.jenkins@hotmail.com";
console.log("Is "+emailadd+" an email address? : "+isValidEmail(emailadd));

/*
 *URL validation Function
 *
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
 *
*/
String.prototype.toTitleCase = function () {
	  var smallWordRex = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;

	  return this.replace(/([^\W_]+[^\s-]*) */g, function (match, phrase, index, title) {
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
Number.prototype.toFixed = function(precision) {
	     var power = Math.pow(10, precision || 0);
	     return String(Math.round(this * power)/power);
 }


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



/*
Find the number of hours or days 
difference between two dates.
*/
var DateDiff = {
	    
		inHours: function(d1, d2) {
	        var t2 = d2.getTime();
	        var t1 = d1.getTime();
	 
	        return parseInt((t2-t1)/(3600*1000));
	    },
	    
	    inDays: function(d1, d2) {
	        var t2 = d2.getTime();
	        var t1 = d1.getTime();
	 
	        return parseInt((t2-t1)/(24*3600*1000));
	    },
	 
	    inWeeks: function(d1, d2) {
	        var t2 = d2.getTime();
	        var t1 = d1.getTime();
	 
	        return parseInt((t2-t1)/(24*3600*1000*7));
	    },
	 
	    inMonths: function(d1, d2) {
	        var d1Y = d1.getFullYear();
	        var d2Y = d2.getFullYear();
	        var d1M = d1.getMonth();
	        var d2M = d2.getMonth();
	 
	        return (d2M+12*d2Y)-(d1M+12*d1Y);
	    },
	 
	    inYears: function(d1, d2) {
	        return d2.getFullYear()-d1.getFullYear();
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
	 
	var d1 = new Date(dString);
	var d2 = new Date(dStringtoo);

	console.log(DateDiff.inHours(d1, d2));


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
parseInt(testfunc); 

console.log("Parse integer from string "+parseInt(testfunc));






/*
Find the smallest value in an array that is 
greater than a given number
*/


/*
Find the total value of just the numbers in an array, 
even if some of the items are not numbers.
*/

//This function removes non-numeric characters
function stripNonNumeric( str )
{
  str += '';
  var rgx = /^\d|\.|-$/;
  var out = '';
  for( var i = 0; i < str.length; i++ )
  {
    if( rgx.test( str.charAt(i) ) ){
      if( !( ( str.charAt(i) == '.' && out.indexOf( '.' ) != -1 ) ||
             ( str.charAt(i) == '-' && out.length != 0 ) ) ){
        out += str.charAt(i);
      }
    }
  }
  return out;
}

console.log("This is the strip non numeric characters function: " +stripNonNumeric("sdwggg34gstgtr"));

/*
Given an array of objects and the name of a key, return 
the array sorted by the value of that key in each of the objects: 
"a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/



