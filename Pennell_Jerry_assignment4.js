/* SDI 1205: Jerry Pennell
   Instructor: JDonlan
   Project 4
   API Project - Usage demonstration
*/


/*
 *Phone Number validation Function
 *Checks for basic American phone numbers 11, 10, 7 instances
 *pass in a string / num to determine if it fits the phone criteria
*/

var lib = new JerryLib();  //Create a new instance of Jerry Lib



var phonenum ="123x444c4444";
console.log("///  Phone number check ///");
console.log("Validating phone... "+lib.formatAndValidatePhone(phonenum));
console.log("");
 
 
/*
 *Email address validation Function
*/
 
	
var emailadd = "leroy.jenkins@hotmail.com";
console.log("///  Email address validation ///");
console.log("Is "+emailadd+" an email address? : "+lib.isValidEmail(emailadd));
console.log("");

/*
 *URL validation Function
*/

var urlset = "http://www.google.com";
console.log("///  URL validation check///");
if(lib.is_valid_url(urlset)) {
	console.log(urlset+ " is a valid url");     //Console information for the check instead of just true
}else {
	console.log(urlset+" is not a valid url");  //Console log info of if the test is false
}
console.log("");


/*
 *Title Case Function
*/	

var ThisStr = "little bo peep has a sheep";
console.log("///  Title Case check///");
console.log("This is title case for this string -> "+ThisStr.toTitleCase());
console.log("");


/*
Given a string that is a list of things separated by 
a given string, as well as another string separator, 
return a string with the first separator changed to the 
second: "a,b,c" + "," + "/" → "a/b/c".
*/

console.log("///  Find and replace characters check///");
console.log("replaceChars "+findAndReplace("a,b,c",",","/"));
console.log("");

/*
Format a number to use a specific number 
of decimal places, as for money: 2.1 → 2.10
*/

var numtoformat = 2.445;
var decplaces = 2;
console.log("/// Format decimal to number of places check ///");
console.log("Formatting the number "+numtoformat+" to "+decplaces+" decimal places= "+format_number(numtoformat,2));
console.log("");

/*
Fuzzy-match a number: is the number 
above or below a number within a certain percent?
*/


var nm= 9,
    percent=10;

console.log("Fuzzy match of  above or below a number ("+nm+") in this case, within a certain percent.. of "+percent+" percent is: "+nm.isFuzzy(nm,percent)); 


/*
Find the number of hours or days 
difference between two dates.
*/

var dString = "April, 28, 2012";
var dStringtoo = "April, 31, 2012"
var diffofdate = new DateDiff("April, 28, 2012", "April, 31, 2012");

console.log("The difference of the date is = "+	 diffofdate.inHours());
	

/*
Given a string version of a number such as "42", 
return the value as an actual Number, such as 42.
*/
	

var testfunc = new convertInteger("42");
console.log("Parse integer from string "+parseInt(testfunc));


/*
Find the smallest value in an array that is 
greater than a given number
*/


var arr=[1,6,12,14],n=5;
console.log("The smallest number in the array that is greater than "+n+" is "+arr.minGreaterThan(n));


/*
Find the total value of just the numbers in an array, 
even if some of the items are not numbers.
*/


var ary = [100,"100",100,"3"];
var average = ary.sum();

console.log("The total value of just the numbers in the array is : "+average);



/*
Given an array of objects and the name of a key, return 
the array sorted by the value of that key in each of the objects: 
"a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/

var myObjectArray = [{ a : 2},{ a : 3},{ a : 1}];


//sort by a, ascending
var x = myObjectArray.sortByField("a");	

for (var i = 0; i < x.length; i++){
    console.log("Sorting values of object a["+i+"]="+x[i].a);
}

	

	
